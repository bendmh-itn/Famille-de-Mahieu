import React, {useState} from 'react';
import '../App.css';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { AddElementInPhoto, DeleteEvent } from '../firebase';
import Compressor from 'compressorjs';
import { storage } from '../firebase';
import SpinnerBootstrap from './spinnerBootstrap';
import ModalAddComment from './modal/modalAddComment';
import { modifyPhotosInEvent } from '../firebase';
import ModalEditEvent from './modal/modalEditEvent';
import ModalAddLink from './modal/modalAddLink';

const EventFlex = ({event, id=null, userId=null, userData=null}) => {
    const [pictures, setPictures] = useState([]);
    const history = useHistory();
    const [className, setClassName] = useState(false);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(-1);
    const [upload, setUpload] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCompressedUpload = (e) => {
        const images = e.target.files;
        let imagesCompress = [];
        for(var i = 0; i < images.length; i++){
            let image = images[i];
            new Compressor(image, {
                quality: 0.5, // 0.6 can also be used, but its not recommended to go below.
                success: (compressedResult) => {
                    imagesCompress.push(compressedResult)
                },
            });
        }
        setUpload("images");
        setPictures(imagesCompress);
        setClassName(true);
      };

    const videoUpload = (e) => {
        let imagesCompress = [];
        imagesCompress.push(e.target.files[0])
        setPictures(imagesCompress);
        setClassName(true);
        setUpload("video");
    }

    const sendPicture = (data) => {
        let file = "";
        if(data === "images"){
            file = "evenements"
        }else if (data === "video"){
            file = "videos"
        }
        setClassName(false);
        setLoading(true);
        var counter = pictures.length-1;
        pictures.forEach(picture => {
            const uploadTask = storage.ref(`${file}/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    setErrorMessage(error);
                },
                () => {
                    storage
                        .ref(file)
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            AddElementInPhoto(id, pictureName, userId, data)
                            .then(() => {
                                counter--;
                                if(counter <= 0){
                                    window.location.reload(false);
                                }
                            })
                            .catch((error) => {
                                setErrorMessage(error);
                              });
                        });
                }
            )
        });
    }

    const ConfirmDelete = (id, info, index = null, data = null) => {
        var res = window.confirm("Êtes-vous sûr de vouloir supprimer?");
        if(res) {
            switch (info) {
            case "event" : 
                DeleteEvent(id);
                break;
            case "pictureEvent" :
                DeletePicture(index, data, id);
                break;
            default :
                console.log("Pas encore implémenté")
            }

        }
    }

    const DeletePicture = (index, picturesList, id) => {
        picturesList.splice(index, 1);
        modifyPhotosInEvent(id, picturesList).then(() => {
            window.location.reload(false);
        });
    }

    return ( 
        <>
            <div className='text-center'>
                    {id && 
                        <div>
                            <h4>{event.value.Titre}</h4>
                            <h6>{moment.unix(event.value.Date.seconds).format("DD/MM/YYYY")}</h6>
                            <img src={event.value.PhotoEvent} alt={event.value.Titre} />
                            {
                                userId && event.value.Created_By === userId &&
                                <>
                                    <ion-icon class="myIcon" name="create-outline" data-toggle="modal" data-target="#editEvent"></ion-icon>
                                    <ModalEditEvent title={event.value.Titre} date={moment.unix(event.value.Date.seconds).format("YYYY-MM-DD")} pictureName={event.value.PhotoEvent} id={id} setLoading={setLoading} />
                                </>
                            }
                            <div className="row align-items-center mb-4">
                                {
                                    !loading && 
                                    <div className="col-sm space-around containerFlexible ">
                                        <div className="form-group mt-2">
                                            <label className='mb-2 image-upload containerFlexible'><ion-icon class="myIcon" size="large" name="images"></ion-icon>
                                                <input className="form-control" name='pictureName' type="file" multiple onChange={handleCompressedUpload} />
                                                <p className='d-none d-sm-none d-md-block'>Images</p>
                                            </label>
                                        </div>
                                        <div className="form-group mt-2">
                                            <label className='mb-2 image-upload containerFlexible'><ion-icon class="myIcon" size="large" name="videocam"></ion-icon>
                                                <input className="form-control" name='pictureName' type="file" onChange={videoUpload} />
                                                <p className='d-none d-sm-none d-md-block'>Vidéo</p>
                                            </label>
                                        </div>
                                        <div className="form-group mt-2 containerFlexible" data-toggle="modal" data-target="#addLink">
                                            <ion-icon class="myIcon" size="large" name="link" onClick={() => setIndex(-1)}></ion-icon>
                                            <p className='d-none d-sm-none d-md-block'>lien</p>
                                        </div>
                                    </div>
                                }
                                {
                                    className && 
                                    <div className="col-sm">
                                        <button className='btn btn-primary mt-4 mb-3' onClick={() => sendPicture(upload)}>
                                            Ajouter {upload === "images" ? "les images" : upload === "video" ? "la vidéo" : "zut"}
                                        </button>
                                    </div>
                                }
                                {
                                    loading && 
                                    <div className="col-sm mt-4">
                                        <SpinnerBootstrap />
                                    </div>
                                }
                                {
                                    errorMessage !== "" &&
                                    <div>
                                        <p>{errorMessage}</p>
                                    </div>
                                }
                            </div>
                            <h4>Les photos de l'event</h4>
                            <div className='containerFlexible center'>
                            {
                                event.value.Photos.map((photo, index) => {
                                    return (
                                    <div className='m-1' key={index}>
                                        <div>
                                            {
                                                photo.image && 
                                                <img className='pictureEvent' src={photo.image} alt="lié à l'event" />
                                            }
                                            {
                                                photo.video &&
                                                <video width="320" height="240" controls>
                                                 <source src={photo.video} type="video/mp4" />
                                                </video>
                                            }
                                            {
                                                photo.link &&
                                                <><h1 className='mb-2'>Lien Web : </h1><a className='linkEvent' rel="noreferrer" target="_blank" href={photo.link}><h3>{photo.texte}</h3></a></>
                                            }
                                            {
                                                userId && userId === photo.Added_by &&
                                                <div>
                                                    {
                                                        photo.link && 
                                                        <ion-icon  class="myIcon" name="pencil-outline" data-toggle="modal" data-target="#addLink" onClick={() => setIndex(index)}></ion-icon>
                                                    }
                                                    {
                                                        !photo.link && 
                                                        <ion-icon  class="myIcon" name="pencil-outline" data-toggle="modal" data-target="#addComment" onClick={() => setIndex(index)}></ion-icon>
                                                    }
                                                    
                                                    <ion-icon class="myIcon" name="trash-outline" onClick={() => ConfirmDelete(id, "pictureEvent", index, event.value.Photos)}></ion-icon>
                                                </div>
                                            }
                                        </div>
                                        {
                                            photo.comment && 
                                            <p className='mb-1'>{photo.comment}</p>
                                        }
                                    </div>
                                    )
                                })
                            }
                            </div>
                            <ModalAddComment id={id} picturesList={event.value.Photos} index={index} />
                            <ModalAddLink id={id} userId={userId} index={index} picturesList={event.value.Photos} />
                        </div>
                    }
                    {!id &&
                        <div>
                            {
                                event.value.visible === true && 
                                    <>
                                        <h4>{event.value.Titre}</h4>
                                        <h6>{moment.unix(event.value.Date.seconds).format("DD/MM/YYYY")}</h6>
                                        <button className="myButton mb-3" onClick={() => history.push("/event/" + event.id)}><img src={event.value.PhotoEvent} alt={event.value.Titre} /></button>
                                    </>
                            }
                            {
                                event.value.visible !== true && (event.value.Created_By === userId || event.value.SharedWith.some(e => e.value === userData.numberFamilly[0])) &&
                                <>
                                    <h4>{event.value.Titre}</h4>
                                    <h6>{moment.unix(event.value.Date.seconds).format("DD/MM/YYYY")}</h6>
                                    <button className="myButton mb-3" onClick={() => history.push("/event/" + event.id)}><img src={event.value.PhotoEvent} alt={event.value.Titre} /></button>
                                </>
                            }
                            {event.value.Created_By === userId && 
                                <div className='mb-3' >
                                    <button className='btn btn-danger' onClick={() => ConfirmDelete(event.id, "event")}>Supprimer</button>
                                </div>
                                
                            }
                        </div>
                    }
            </div>   
        </>
     );
}
 
export default EventFlex;