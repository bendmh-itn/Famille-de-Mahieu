import React from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';

const TrombinoscopeFlex = ({lienImage, prenomNom, dateDeNaissance, link="#", dateDeces, generation}) => {
    const history = useHistory();
    return ( 
        <>
            <div className="elementFlexible">
                {link !== "#" &&
                    <button className="myButton" onClick={() => history.push(link)}><img src={lienImage} alt={prenomNom} /></button>
                }
                {(generation === "4" || generation === "1") && 
                    <img src={lienImage} alt={prenomNom} />
                }
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