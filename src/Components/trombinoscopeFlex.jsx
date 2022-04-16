import React from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';

const TrombinoscopeFlex = ({person, link="#", myBirthday = false, className="elementFlexible"}) => {
    const history = useHistory();

    return ( 
        <>
            <div className={className}>
                {link !== "#" && 
                    <button className="myButton" onClick={() => history.push(link)}><img src={person.pictureName} alt={person.firstName + " " + person.lastName} /></button>
                }
                {link === "#" && 
                    <img className='picture' src={person.pictureName} alt={person.firstName + " " + person.lastName} />
                }
                <div>
                    <h5>{person.firstName + " " + person.lastName}</h5>
                    <h6>{person.birthDate} 
                    {person.deathDate &&
                        <span> - {person.deathDate}</span> 
                    }
                    </h6>
                </div>
                {myBirthday && <h2 className="clignote">Happy birthday</h2>}
            </div>   
        </>
     );
}
 
export default TrombinoscopeFlex;