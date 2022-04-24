import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../../Components/navBar/navBarAdmin';
import { storage } from '../../firebase';
import { deletePicture } from '../../firebase';
import { getUserData } from '../../Functions/cache';


const AdminGestionPicture = () => {
    const [personStatus, setPersonStatus] = useState("");
    const [picturesList, setPicturesList] = useState([]);
    const [dataCharged, setDataCharged] = useState(false);

    useEffect(() => {
        var listRef = storage.ref('images');
        var picture = [];
        // Find all the prefixes and items.
        listRef.listAll()
        .then((res) => {
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then(pictureName => {
                    picture.push(pictureName);
                });
            });
            setPicturesList(picture);
            setDataCharged(true);
        }).catch((error) => {
            console.log(error)
        });
        const userData = getUserData();
        if(userData.data !== undefined){
            setPersonStatus(userData.data.status);
        }
    }, [dataCharged])

    const DeletePicture = (pictureName) => {
        deletePicture(pictureName).then(() => {
            window.location.reload();
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
                    {dataCharged && 
                    picturesList.map((pictureName) => {
                        return (
                            <div className='text-center' key={pictureName}>
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