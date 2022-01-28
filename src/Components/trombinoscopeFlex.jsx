import React from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';

const TrombinoscopeFlex = ({lienImage, prenomNom, dateDeNaissance, link="#", dateDeces, generation, myBirthday = false, className="elementFlexible", description = ""}) => {
    const history = useHistory();
    /*const [classNameFace, setClassNameFace] = useState("frontCard");
    const [classNameBack, setClassNameBack] = useState("backCard");
    const [cardSideVisible, setCardSideVisible] = useState("front");

    const ChangeClassName = () => {
        if(cardSideVisible === "front"){
            setClassNameFace("turnImage");
            setTimeout(() => {
                setClassNameFace("backCard")
            }, 1500);
            setTimeout(() => {
                setClassNameBack("frontCard");
            }, 1510);
            setCardSideVisible("back");
        }else{
            setClassNameBack("turnImage");
            setTimeout(() => {
                setClassNameBack("backCard");
            }, 1500);
            setTimeout(() => {
                setClassNameFace("frontCard");
            }, 1510);
            setCardSideVisible("front");
        }
    }*/

    return ( 
        <>
            <div className={className}>
                {link !== "#" && 
                    <button className="myButton" onClick={() => history.push(link)}><img src={lienImage} alt={prenomNom} /></button>
                }
                {link === "#" &&
                    <img className='picture' src={lienImage} alt={prenomNom} />
                    /*<button className="myButton" onClick={ChangeClassName}>
                        <div className={classNameFace}>
                            <img className='picture' src={lienImage} alt={prenomNom} />
                        </div>
                        <div className={classNameBack}>
                            <p className='myParagraph'>{description !== "" ? description :  "Cette personne n'a mis aucune description :("}</p>
                        </div>
                    </button>*/
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