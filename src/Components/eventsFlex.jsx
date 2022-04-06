import React, {useState} from 'react';
import '../App.css';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { AddElementInPhoto, DeleteEvent } from '../firebase';
import Compressor from 'compressorjs';
import { storage } from '../firebase';

const EventFlex = ({event, id=null, userId=null}) => {
    const [pictures, setPictures] = useState([]);
    const history = useHistory();
    const [className, setClassName] = useState("d-none");

    const handleCompressedUpload = (e) => {
        const images = e.target.files;
        let imagesCompress = [];
        for(var i = 0; i < images.length; i++){
            let image = images[i];
            console.log(image);
            new Compressor(image, {
                quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
                success: (compressedResult) => {
                    imagesCompress.push(compressedResult)
                },
            });
        }
        setPictures(imagesCompress);
        setClassName("d-block")
      };

    const sendPicture = () => {
        pictures.forEach(picture => {
            const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            AddElementInPhoto(id, pictureName).then(() => {
                                    window.location.reload(false);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        });
                }
            )
        });
    }


    return ( 
        <>
            <div className='text-center'>
                    <h4>{event.value.Titre}</h4>
                    <h6>{moment.unix(event.value.Date.seconds).format("DD/MM/YYYY")}</h6>
                    {id && 
                        <div>
                            <img src={event.value.PhotoEvent} alt={event.value.Titre} />
                            <div className="row mb-4">
                                <div className="col-sm">
                                <div className="form-group mt-2">
                                    <label className='mb-2'>Ajouter une image</label>
                                    <input className="form-control" name='pictureName' type="file" multiple onChange={handleCompressedUpload} />
                                </div>
                                </div>
                                <div className="col-sm">
                                    <button className={'btn btn-primary mt-4 mb-3 ' + className} onClick={sendPicture}>
                                        Ajouter l'image
                                    </button>
                                </div>
                            </div>
                            <h4>Les photos de l'event</h4>
                            {
                                event.value.Photos.map((photo) => {
                                    return (
                                    <div className='mt-2 mb-2'>
                                        <img key={photo} src={photo} alt="lié à l'event" />
                                    </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {!id &&
                        <div>
                            <button className="myButton mb-3" onClick={() => history.push("/events/" + event.id)}><img src={event.value.PhotoEvent} alt={event.value.Titre} /></button>
                            {event.value.Created_By === userId && 
                                <div>
                                    <button className='btn btn-danger mb-3' onClick={() => DeleteEvent(event.id)}>Supprimer</button>
                                </div>
                                
                            }
                        </div>
                    }
            </div>   
        </>
     );
}
 
export default EventFlex;