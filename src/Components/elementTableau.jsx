import React from 'react';
import { NavLink } from "react-router-dom";

const ElementTableau = ({lienImage, prenomNom, dateDeNaissance, number=1, link="#", dateDeces}) => {
    return ( 
        <>
            <td colSpan={number}>
                <NavLink className="navbar-brand" to={link}><img src={lienImage} alt={prenomNom} /></NavLink>
                <div>
                    <h5>{prenomNom}</h5>
                    <h6>{dateDeNaissance}{dateDeces}</h6>
                </div>
            </td>
        </>
     );
}
 
export default ElementTableau;