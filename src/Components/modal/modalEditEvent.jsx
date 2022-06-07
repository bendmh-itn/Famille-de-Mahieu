import React, { useState} from 'react';
import Compressor from 'compressorjs';
import { UpdateEvent } from '../../firebase';
import { storage } from '../../firebase';


const ModalEditEvent = ({title, date, pictureName, id, setLoading}) => {
    const [data, setData] = useState({titre : title, date: date, pictureName: pictureName});
    const [pictureChanged, setPictureChanged] = useState(false);

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
        setPictureChanged(true);
        const { name } = e.target;
        const image = e.target.files[0];
        
        new Compressor(image, {
          quality: 0.5, // 0.6 can also be used, but its not recommended to go below.
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
        setLoading(true);
        if(pictureChanged){
            let picture = data.pictureName;
            const uploadTask = storage.ref(`evenements/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log("Error writing document: " + error);
                },
                () => {
                    storage
                        .ref("evenements")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            UpdateEvent(data, id, pictureName).then(() => {
                                window.location.reload(false);
                                })
                                .catch((error) => {
                                console.log("Error writing document: " + error);
                                });
                        });
                }
            )
        }else {
            UpdateEvent(data, id, data.pictureName).then(() => {
                window.location.reload(false);
            });
        }
    }

    return ( 
        <>
            <div className="modal fade" id="editEvent" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="editEventLabel">Modifier l'événement</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Changer le titre</label>
                        <input className="form-control" value={data.titre} placeholder="Titre de l'événement" name="titre" onChange={chooseTitle} required></input>
                    </div>
                    <div className="form-group">
                        <label>Changer la date</label>
                        <input className="form-control" value={data.date} type="date" name="date" onChange={chooseDate} required></input>
                    </div>
                    <div className="form-group">
                        <label className='mb-2'>Changer l'image</label>
                        <input className="form-control" name='pictureName' type="file" onChange={handleCompressedUpload} />          
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={getData}>Changer</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalEditEvent;