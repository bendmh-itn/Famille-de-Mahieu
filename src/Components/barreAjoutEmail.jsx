import React from 'react';
import { NavLink } from "react-router-dom";


const barreAjoutEmail = () => {
    return ( 
        <>
            <div className="alert alert-warning myAlert" role="alert">
                <p>Tu n'a pas encore été validé ton compte. Suis ce lien pour le faire : <NavLink to="/profil">Lien</NavLink></p>
            </div>
        </>
     );
}
 
export default barreAjoutEmail;