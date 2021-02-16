import React from 'react';
import { NavLink } from "react-router-dom";

const TrombinoscopeFlex = ({lienImage, prenomNom, dateDeNaissance, link="#", dateDeces}) => {
    return ( 
        <>
            <div className="elementFlexible">
                 <NavLink className="navbar-brand" to={link} replace ><img src={lienImage} alt={prenomNom} /></NavLink>
                <div>
                    <h5>{prenomNom}</h5>
                    <h6>{dateDeNaissance} 
                    {dateDeces &&
                        <span> - {dateDeces}</span> 
                    }
                    </h6>
                </div>
            </div>   
        </>
     );
}
 
export default TrombinoscopeFlex;