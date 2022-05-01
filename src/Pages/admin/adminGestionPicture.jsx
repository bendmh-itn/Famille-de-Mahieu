import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../../Components/navBar/navBarAdmin';
import { storage } from '../../firebase';
import { deletePicture } from '../../firebase';
import { getUserData } from '../../Functions/cache';


const AdminGestionPicture = () => {
    const [personStatus, setPersonStatus] = useState("");
    const [picturesList, setPicturesList] = useState([]);
    const [dataChanged, setDataChanged] = useState(false);

    useEffect(() => {
        setPicturesList([]);
        var listRef = storage.ref().child('images/');
        listRef.listAll()
        .then((res) => {
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then(pictureName => {
                    setPicturesList(arr => [...arr, pictureName])
                });
            });
        }).catch((error) => {
            console.log(error)
        });
        listRef = storage.ref().child('evenements/');
        listRef.listAll()
        .then((res) => {
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then(pictureName => {
                    setPicturesList(arr => [...arr, pictureName])
                });
            });
        }).catch((error) => {
            console.log(error)
        });
        const userData = getUserData();
        if(userData.data !== undefined){
            setPersonStatus(userData.data.status);
        }
    }, [dataChanged])

    const DeletePicture = (pictureName) => {
        deletePicture(pictureName).then(() => {
            setDataChanged(!dataChanged);
        }).catch((error) => {
            console.log(error)
        })
    }

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
                    <h1>Gestion des images</h1>
                    <p>Nombre d'images : {picturesList.length}</p>
                    <div className='containerFlexible'>
                    {
                    picturesList.map((pictureName, index) => {
                        return (
                            <div className='text-center' key={index}>
                                <img className='pictureAdmin' src={pictureName} alt={pictureName} />
                                <ion-icon class="myIcon" name="trash-outline" onClick={() => DeletePicture(pictureName)}></ion-icon>
                            </div>)
                    })}
                    </div>
                </>
            }
        </>
     );
}
 
export default AdminGestionPicture;