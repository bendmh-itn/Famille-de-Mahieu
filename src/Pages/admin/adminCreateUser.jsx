import React, { useEffect, useState } from 'react';
import { getUserData } from '../../Functions/cache';
import { AllDataInOptionsNoException, FindOnePersonByNumberFamilly } from '../../Functions/FilterData';
import { CreateUserFireBase } from '../../firebase';
import fireBase from '../../firebase';
import { storage } from '../../firebase';
import SelectPerson from '../../Components/selectModifyPerson';
import Compressor from 'compressorjs';
import SpinnerBootstrap from '../../Components/spinnerBootstrap';
import ControlledCarousel from '../../Components/CarouselBootstrap';
import NavBarAdmin from '../../Components/navBar/navBarAdmin';


const AdminCreateUser = () => {
    const [personStatus, setPersonStatus] = useState("");
    const [picture, setPicture] = useState("");
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState("");
    const [create, setCreate] = useState(true);
    const [pictureChanged, setPictureChanged] = useState(false);
    const [id, setId] = useState("");
    const [personSelect, setPersonSelect] = useState([]);
    const [loading, setLoading] = useState(false);
    const [myClass, setMyClass] = useState("backCard");

    function CreateUser() {
        if(picture === ""){
            CreateUserFireBase(personSelect).then(() => {
                setMessage(personSelect.firstName + " " + personSelect.lastName + " a bien été enregistré");
                RefreshField();
              })
              .catch((error) => {
                setMessage("Error writing document: " + error);
              });
        }else{
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
                            CreateUserFireBase(personSelect, pictureName).then(() => {
                                setMessage(personSelect.firstName + " " + personSelect.lastName + " a bien été enregistré");
                                RefreshField();
                                })
                                .catch((error) => {
                                setMessage("Error writing document: " + error);
                                });
                        });
                }
            )
        }
    }

    const modifyPersonSelect = (e) => {
        setLoading(false);
        setMessage("vide");
        window.scroll(0,0);
        setCreate(false);
        if(e !== null){
            let numberFamilly = e.split('/')[1];
            const person = FindOnePersonByNumberFamilly(numberFamilly);
            if(person.email === undefined){
                person.email = "";
            }
            setPersonSelect(person);
            fireBase.FindIdPerson(numberFamilly)
            .then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.id)
				setId(data[0]);
			});
        }else{
            RefreshField();
        }
        setMyClass("backCard");
    }

    const ModifyUser = () => {
        setLoading(true);
        if(!pictureChanged){
            fireBase.ModifyUserFireBase(id, personSelect).then(() => {
                setMessage("Vos données ont bien été modifiées");
              })
              .catch((error) => {
                setMessage("Error writing document: " + error);
              });
        }else{
            const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    setMessage("Error writing document: " + error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            fireBase.ModifyUserFireBase(id, personSelect, pictureName).then(() => {
                                    setMessage("Vos données ont bien été modifiées");
                                })
                                .catch((error) => {
                                setMessage("Error writing document: " + error);
                                });
                        });
                }
            )
        }
        setMyClass("frontCard");
    }

    function RefreshField (){
        setPersonSelect([]);
        setCreate(true);
    }

    const handleCompressedUpload = (e) => {
        const { name } = e.target;
        const image = e.target.files[0];
        setPersonSelect({
            ...personSelect,
            [name]: image
        });
        
        new Compressor(image, {
          quality: 0.5, // 0.6 can also be used, but its not recommended to go below.
          success: (compressedResult) => {
            // compressedResult has the compressed file.
            // Use the compressed file to upload the images to your server.
            setPicture(compressedResult);
            setPictureChanged(true);
          },
        });
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonSelect({
            ...personSelect,
            [name]: value
        });
    };

    useEffect(() => {
        const userData = getUserData();
        if(userData.data !== undefined){
            setPersonStatus(userData.data.status);
        }
        setOptions(AllDataInOptionsNoException());
    }, []);

    return ( 
        <>
            
            {
                (!personStatus || personStatus !== "admin") && 
                <div>Bien essayé mais tu n'as pas le droit de venir ici</div>
            }
            {
                personStatus && personStatus === "admin" && 
                <>
                    <NavBarAdmin />
                    <h1>Gestion des utilisateurs</h1>
                    <h6>Pour modifier une personne, sélectionne la dans la liste ci-dessous</h6>
                    <SelectPerson
                        data={options}
                        modifyPerson={modifyPersonSelect}
                    />
                    <div className="form-group">
                        <label>Nom de famille (souvent nom mari - épouse)</label>
                        <input className="form-control" name='famillyName' value={personSelect.famillyName || ''} placeholder="Nom de famille..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Date de mariage</label>
                        <input className="form-control" name='dateMariage' value={personSelect.dateMariage || ''} placeholder="Date de mariage" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Nom</label>
                        <input className="form-control" name='lastName' value={personSelect.lastName || ''} placeholder="Nom..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Prénom</label>
                        <input className="form-control" name='firstName' value={personSelect.firstName || ''} placeholder="Prénom..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Date de naissance</label>
                        <input className="form-control" name='birthDate'  value={personSelect.birthDate || ''} placeholder="Date de naissance..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name='email' value={personSelect.email === undefined ? "" : personSelect.email} placeholder="Email..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Numéro de famille (important)</label>
                        <input className="form-control" name='numberFamilly' value={personSelect.numberFamilly || ''} type="number" placeholder="numéro de famille..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Génération (important)</label>
                        <input className="form-control" name='generation' value={personSelect.generation || ''} placeholder="génération..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Image profil</label>
                        <input className="form-control" name='pictureName' type="file" onChange={handleCompressedUpload} />
                    </div>
                    <div className="row align-items-center mb-4">
                        {create && !loading && 
                            <div className="col-sm mt-4">
                                <button className="btn btn-primary m-4" onClick={CreateUser}>
                                    créer
                                </button>
                            </div>
                        }
                        {!create && !loading && 
                            <div className="col-sm mt-4">
                                <button className="btn btn-secondary m-4" onClick={ModifyUser}>
                                    Modifier
                                </button>
                            </div>
                        }
                        {
                            loading && 
                            <div className="col-sm mt-4">
                                <SpinnerBootstrap />
                            </div>
                        }
                        <div className={'alert alert-success ' + myClass} role="alert">
                            <p>{message}</p>
                        </div>
                    </div>
                    {
                        personSelect.PhotosHistory && 
                        <>
                            <h2 className='mt-4 mb-0'>Votre historique photo</h2>
                            <ControlledCarousel 
                                person={personSelect}
                                id={id}
                            />
                        </>
                    }
            </>
            }
        </>
     );
}
 
export default AdminCreateUser;