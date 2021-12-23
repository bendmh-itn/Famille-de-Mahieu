import React, { useEffect, useState } from 'react';
import { ChooseOnePeople } from '../Functions/FilterData';

const Jeu = () => {

    const maximum = 20;
    const [person, setPerson] = useState([]);
    const [personSelected, setPersonSelected] = useState([]);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectValue, setSelectValue] = useState("");
    const [indice, setIndice] = useState(false);
    const [index, setIndex] = useState(0);
    const [goodAnswer, setGoodAnswer] = useState("");
    const [level, setLevel] = useState(0);

    function VerifyAnswer () {
        if(selectValue.toLowerCase() === personSelected.firstName.toLowerCase().replace(/\s+/g, '')){   
            if(indice){
                setScore(score+0.5);
            }else{
                setScore(score+1);
            }
            setGoodAnswer("");
        }else {
            setGoodAnswer(personSelected.firstName);
        }
        nextPerson()
        setIndice(false);
        if(total !== person.length){
            setTotal(total + 1);
        }
        setSelectValue("");
    }

    function TryAgain() {
        ChooseData();
        setGoodAnswer("");
        setIndex(0);
    }

    function nextPerson(){
        let monIndex = index;
        setIndex(index+1);
        monIndex = monIndex +1;
        setPersonSelected(person[monIndex]);
    }

    function GiveIndice(){
        setIndice(true);
    }

    function ChangeLevel(e){
        if(level === 0){
            setLevel(1);
        }else{
            setLevel(0);
        }
    }

    function ChooseData(){
        let data = ChooseOnePeople();
        let dataFiltred = [];
        if(level === 1){
            data.forEach((element) => {
                if (element.generation === "4") {
                    dataFiltred.push(element);
                }
              });
              setTotal(0);
              setScore(0);
              setPerson(dataFiltred);
              setPersonSelected(dataFiltred[0]);
        }else {
            setTotal(0);
            setScore(0);
            setPerson(data);
            setPersonSelected(data[0]);
        }
    }

    useEffect(() => {
        let data = ChooseOnePeople();
        let dataFiltred = [];
        if(level === 1){
            data.forEach((element) => {
                if (element.generation === "4") {
                    dataFiltred.push(element);
                }
              });
              setTotal(0);
              setScore(0);
              setPerson(dataFiltred);
              setPersonSelected(dataFiltred[0]);
        }else {
            setTotal(0);
            setScore(0);
            setPerson(data);
            setPersonSelected(data[0]);
        }
    }, [level]);

    return(
    <>
        <div className="container">
            {!personSelected &&
                <h2>No data Selected. go back to the first page :'(</h2>
            }
            {personSelected && total !== maximum &&
                <div className="text-center">
                    <h1 className="text-center">Quel est mon prénom ?</h1>
                    {total === 0 && <p>Désolé, pour ceux qui n'ont pas mis de photo, c'est d'office faux sauf si vous devinez au hasard</p>}
                    <img src={personSelected.pictureName} alt={personSelected.firstName} /> 
                    {indice && <h2>{personSelected.lastName}</h2>}
                    <div className="form-group mt-4">
                        <input type="text" value={selectValue} onChange={e => setSelectValue(e.target.value)} />
                    </div>
                    <div className='containerFlexible'>
                        <div className='elementFlexible'>
                            <button onClick={VerifyAnswer} className="btn btn-primary mt-3">Vérifier</button>
                        </div>
                        <div className='elementFlexible'>
                            <button onClick={GiveIndice} className="btn btn-secondary mt-3">indice</button>
                        </div>
                        <div className='elementFlexible'>
                            <button onClick={ChangeLevel} className="btn btn-danger mt-3">{level === 0 ? "Difficile" : "Facile" }</button>
                        </div>
                    </div>
                        
                    <h3 className='mt-3'>Votre score : {score} sur {total}</h3>
                    {goodAnswer &&
                        <p>Son prénom était {goodAnswer}</p>
                    }
                </div>
            }
            {total === maximum &&
                <div>
                    <h1>Bravo tu as obtenu {score} sur {total}</h1>
                    <button onClick={TryAgain} className="btn btn-primary mt-3">Recommencer</button>
                </div>
            }
            
            
        </div>
    </>
    );
}
 
export default Jeu;
