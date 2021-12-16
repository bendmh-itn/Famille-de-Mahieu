import React from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';

const TrombinoscopeFlex = ({lienImage, prenomNom, dateDeNaissance, link="#", dateDeces, generation, myBirthday = false}) => {
    const history = useHistory();
    return ( 
        <>
            <div className="elementFlexible">
                {link !== "#" && 
                    <button className="myButton" onClick={() => history.push(link)}><img src={lienImage} alt={prenomNom} /></button>
                }
                {link === "#" && 
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
                {myBirthday && <h2 className="clignote">Happy birthday</h2>}
            </div>   
        </>
     );
}
 
export default TrombinoscopeFlex;