import React, { useState} from 'react';
import Compressor from 'compressorjs';
import { CreateEvent, storage } from '../../firebase';
import SpinnerBootstrap from '../spinnerBootstrap';
import Select from 'react-select';


const ModalCreateEvent = ({userId}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const options = [
        { value: '1', label: 'Famille Didier et Marie-Joëlle' },
        { value: '2', label: 'Famille Baudouin et Sabine' },
        { value: '3', label: 'Famille Guy et Vinciane' },
        { value: '4', label: 'Famille Cédric et Pascale' },
        { value: '5', label: 'Famille Louis et Charlotte' },
        { value: '6', label: 'Famille Miguel et Brigitte' },
        { value: '7', label: 'Famille Patrick et Anne' },
        { value: '8', label: 'Famille Thierry et Carine' },
        { value: '9', label: 'Patricia' },
      ]
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

    const visibleOrNot = (e) => {
        if(data['visible'] === undefined || data['visible'] === false){
            setData({
                ...data,
                'visible': true
            });
        }else {
            setData({
                ...data,
                'visible': false
            });
        }
    }

    const changeSelect = (e) => {
        if(e!== null){
            setData({
                ...data,
                'SharedWith': e
            });
        }
    }

    const handleCompressedUpload = (e) => {
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
            {
                loading && 
                <div className='mb-3'>
                    <SpinnerBootstrap />
                </div>
            }
            {
                !loading &&
                <button type="button" className="btn btn-primary mr-3" data-toggle="modal" data-target="#exampleModalCreate">
                    Créer un événement
                </button>
            }
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
                    <div>
                        <p>Partie ci-dessous non modifiable pour l'instant</p>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name='visible' onChange={visibleOrNot} />
                        <label className="form-check-label">Visible par tout le monde</label>
                    </div>
                    {
                        (data['visible'] === false || data['visible'] === undefined) &&
                        <>
                        <label className="form-select-label">Visible par ... (laissez vide et ce sera privé pour vous)</label>
                        <Select
                            isMulti
                            name="visibleBy"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={changeSelect}
                        />
                        </>
                    }
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