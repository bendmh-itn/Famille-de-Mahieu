import React, { useState} from 'react';
import Compressor from 'compressorjs';
import { CreateEvent } from '../firebase';
import { storage } from '../firebase';


const ModalCreateEvent = ({userId}) => {
    const [data, setData] = useState([]);

    const chooseTitle = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    const chooseDate = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    const handleCompressedUpload = (e) => {
        const { name } = e.target;
        const image = e.target.files[0];
        
        new Compressor(image, {
          quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
          success: (compressedResult) => {
            // compressedResult has the compressed file.
            // Use the compressed file to upload the images to your server.
            setData({
                ...data,
                [name]: compressedResult
            });
          },
        });
      };

    const getData = () => {
        let picture = data.pictureName;
        const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log("Error writing document: " + error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            CreateEvent(data, pictureName, userId).then(() => {
                                window.location.reload(false);
                                })
                                .catch((error) => {
                                console.log("Error writing document: " + error);
                                });
                        });
                }
            )
    }

    return ( 
        <>
            <button type="button" className="btn btn-primary mr-3" data-toggle="modal" data-target="#exampleModalCreate">
                Créer un événement
            </button>
            <div className="modal fade" id="exampleModalCreate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Créer l'événement</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Titre de l'événement</label>
                        <input className="form-control" placeholder="Titre de l'événement" name="titre" onChange={chooseTitle} required></input>
                    </div>
                    <div className="form-group">
                        <label>Date de l'événement</label>
                        <input className="form-control" type="date" name="date" onChange={chooseDate} required></input>
                    </div>
                    <div className="form-group">
                        <label className='mb-2'>Ajouter une image</label>
                        <input className="form-control" name='pictureName' type="file" onChange={handleCompressedUpload} />          
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={getData}>Créer</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalCreateEvent;