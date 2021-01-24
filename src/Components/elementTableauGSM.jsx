import React from 'react';
import { NavLink } from "react-router-dom";

const ElementTableau = ({lienImage, prenomNom, dateDeNaissance, number=1, link="#"}) => {
    return ( 
        <>
            <tr>
                <td colSpan={number}>
                    <NavLink className="navbar-brand" to={link}><img src={lienImage} alt={prenomNom} /></NavLink>
                    <div>
                        <h5>{prenomNom}</h5>
                        <h6>{dateDeNaissance}</h6>
                    </div>
                </td>
            </tr>
        </>
     );
}
 
export default ElementTableau;