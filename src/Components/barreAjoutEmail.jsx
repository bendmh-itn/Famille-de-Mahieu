import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { PutDataLocalStorage } from '../firebase';


const BarreAjoutEmail = () => {
    const [className, setClassName] = useState("d-none");

    useEffect(() => {
        PutDataLocalStorage(localStorage.getItem("email")).then((result) => {
            if(result && result.id === undefined){
                setClassName("d-block")
            }else {
                setClassName("d-none");
            }
        });
    },[]);

    return ( 
        <>
            <div className={"alert alert-warning " + className } role="alert">
                <p>Tu n'a pas encore validé ton compte. Suis ce <NavLink to="/profil">Lien</NavLink> pour le faire</p>
            </div>
        </>
     );
}
 
export default BarreAjoutEmail;