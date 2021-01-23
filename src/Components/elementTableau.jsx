import React from 'react';

const ElementTableau = ({lienImage, prenomNom, dateDeNaissance, number=1}) => {
    return ( 
        <>
            <td colSpan={number}>
                <img src={lienImage} alt={prenomNom} />
                <div>
                    <h5>{prenomNom}</h5>
                    <h6>{dateDeNaissance}</h6>
                </div>
            </td>
        </>
     );
}
 
export default ElementTableau;