import React, {useState} from 'react';
import '../App.css';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { AddElementInPhoto, DeleteEvent } from '../firebase';
import Compressor from 'compressorjs';
import { storage } from '../firebase';
import SpinnerBootstrap from './spinnerBootstrap';
import ModalAddComment from './modalAddComment';

const EventFlex = ({event, id=null, userId=null}) => {
    const [pictures, setPictures] = useState([]);
    const history = useHistory();
    const [className, setClassName] = useState(false);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleCompressedUpload = (e) => {
        const images = e.target.files;
        let imagesCompress = [];
        for(var i = 0; i < images.length; i++){
            let image = images[i];
            new Compressor(image, {
                quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
                success: (compressedResult) => {
                    imagesCompress.push(compressedResult)
                },
            });
        }
        setPictures(imagesCompress);
        setClassName(true);
      };

    const sendPicture = () => {
        setClassName(false);
        setLoading(true);
        var counter = pictures.length-1;
        pictures.forEach(picture => {
            const uploadTask = storage.ref(`evenements/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("evenements")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            AddElementInPhoto(id, pictureName).then(() => {
                                counter--;
                                if(counter <= 0){
                                    window.location.reload(false);
                                }
                            });
                        });
                }
            )
        });
    }

    const ConfirmDelete = (id) => {
        var res = window.confirm("Êtes-vous sûr de vouloir supprimer?");
        if(res) {
            DeleteEvent(id);
        }
    }

    return ( 
        <>
            <div className='text-center'>
                    <h4>{event.value.Titre}</h4>
                    <h6>{moment.unix(event.value.Date.seconds).format("DD/MM/YYYY")}</h6>
                    {id && 
                        <div>
                            <img src={event.value.PhotoEvent} alt={event.value.Titre} />
                            <div className="row align-items-center mb-4">
                                {
                                    !loading && 
                                    <div className="col-sm">
                                        <div className="form-group mt-2">
                                            <label className='mb-2'>Ajouter des images</label>
                                            <input className="form-control" name='pictureName' type="file" multiple onChange={handleCompressedUpload} />
                                        </div>
                                    </div>
                                }
                                {
                                    className && 
                                    <div className="col-sm">
                                        <button className='btn btn-primary mt-4 mb-3' onClick={sendPicture}>
                                            Ajouter les images
                                        </button>
                                    </div>
                                }
                                {
                                    loading && 
                                    <div className="col-sm mt-4">
                                        <SpinnerBootstrap />
                                    </div>
                                }
                            </div>
                            <h4>Les photos de l'event</h4>
                            <div className='containerFlexible'>
                            {
                                event.value.Photos.map((photo, index) => {
                                    return (
                                    <div key={index}>
                                        <div className='mt-2 mb-2'>
                                            <img className='pictureEvent' src={photo.image} alt="lié à l'event" />
                                            <ion-icon  class="myIcon" name="pencil-outline" data-toggle="modal" data-target="#addComment" onClick={() => setIndex(index)}></ion-icon>
                                        </div>
                                        <div>
                                            {
                                                photo.comment && 
                                                <p>{photo.comment}</p>
                                            }
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            </div>
                            <ModalAddComment id={id} picturesList={event.value.Photos} index={index} />
                        </div>
                    }
                    {!id &&
                        <div>
                            <button className="myButton mb-3" onClick={() => history.push("/events/" + event.id)}><img src={event.value.PhotoEvent} alt={event.value.Titre} /></button>
                            {event.value.Created_By === userId && 
                                <div>
                                    <button className='btn btn-danger mb-3' onClick={() => ConfirmDelete(event.id)}>Supprimer</button>
                                </div>
                                
                            }
                        </div>
                    }
            </div>   
        </>
     );
}
 
export default EventFlex;