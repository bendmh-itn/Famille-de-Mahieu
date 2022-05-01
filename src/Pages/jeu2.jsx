import React, { useEffect, useState } from 'react';
import { FilterByGeneration, getData, copyData, randomize, getParentsArray } from '../Functions/FilterData';
import fireBase from '../firebase';
import NavBarJeux from '../Components/navBar/navBarJeux';

const Jeu2 = () => {
    const maximum = 20;
    const [generation4, setGeneration4] = useState([]);
    const [parentsList, setParentsList] = useState([]);
    const [score, setScore] = useState(0);
    const [personSelected, setPersonSelected] = useState([]);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState("");
    const [goodAnswer, setGoodAnswer] = useState("");
    const [colorMessage, setColorMessage] = useState("dark");

    const CheckResponse = (parent) => {
        if(parent.numberFamilly === personSelected.numberFamilly.slice(0, 2) || parent.numberFamilly === personSelected.numberFamilly.slice(0, 2) + "0"){
            setScore(score + 1);
            setTotal(total + 1);
            nextPerson();
            setMessage("Bravo ! " + personSelected.firstName + " est bien le fils ou la fille de " + parent.firstName);
            setColorMessage("success")
            window.scroll(0, 0);
        }else{
            nextPerson();
            setTotal(total + 1);
            setMessage("Raté ! Le papa ou la maman de " + personSelected.firstName + " est " + goodAnswer.firstName);
            setColorMessage("danger")
            window.scroll(0, 0);
        }
    }

    function TryAgain() {
        window.location.reload(false);
    }

    function nextPerson(){
        let monIndex = index;
        setIndex(index+1);
        monIndex = monIndex +1;
        setPersonSelected(generation4[monIndex]);
        const dataReturned = getParentsArray(generation4[monIndex].numberFamilly);
        setGoodAnswer(dataReturned.goodAnswer)
        setParentsList(dataReturned.tabParentsRandom)
    }

    useEffect(() => {
        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
                let dataFinal = FilterByGeneration("4", true);
                let dataRandom = randomize(dataFinal)
                setGeneration4(dataRandom);
                setPersonSelected(dataRandom[0]);
                const dataReturned = getParentsArray(dataRandom[0].numberFamilly);
                setGoodAnswer(dataReturned.goodAnswer)
                setParentsList(dataReturned.tabParentsRandom)
			})
        }else{
            let dataFinal = FilterByGeneration("4", true);
            let dataRandom = randomize(dataFinal)
            setGeneration4(dataRandom);
            setPersonSelected(dataRandom[0]);
            setPersonSelected(dataRandom[0]);
            const dataReturned = getParentsArray(dataRandom[0].numberFamilly);
            setGoodAnswer(dataReturned.goodAnswer)
            setParentsList(dataReturned.tabParentsRandom)
        }

    }, []);

    return(
    <>
        <div className="container">
            <div className="d-block d-sm-block d-md-block d-lg-none">
                <NavBarJeux />
            </div>
            {
                total === maximum &&
                <>
                    <h1>Bravo tu as obtenu {score} sur {maximum}</h1>
                    <button onClick={TryAgain} className="btn btn-primary mt-3">Recommencer</button>
                </>
            }
            {
                total < maximum && 
                <>
                <h2 className='text-center mt-3'>Qui est mon papa ou ma maman ?</h2>
                <p className='text-center'>Score : {score} / {maximum}</p>
                <p className={'text-center text-' + colorMessage}>{message} </p>
                {
                    personSelected.pictureName &&
                    <div className='text-center mb-3'>
                        <img src={personSelected.pictureName} alt='Personne selectionnée' />
                    </div>
                }
                <h4 className='text-center'>Les choix possibles</h4>
                <div className='containerFlexible'>
                    {parentsList.length !== 0 && parentsList.map((parent, index) => {
                        return (<div key={index}><img className='imageJeu2' src={parent.pictureName} alt='Parents selectionnés' onClick={() => CheckResponse(parent)} /></div>)
                    })}
                </div>
                </>
            }
        </div>
    </>
    );
}
 
export default Jeu2;
