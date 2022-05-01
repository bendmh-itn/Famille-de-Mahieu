import React, { useEffect, useState } from 'react';
import { RandomizeArray, getData, copyData } from '../Functions/FilterData';
import fireBase from '../firebase';
import NavBarJeux from '../Components/navBar/navBarJeux';

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
    const [imageRef] = useState(React.createRef());
    const [imageHorizontal, setImageHorizontal] = useState("imageVerticale");

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
        let data = RandomizeArray();
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
        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
                let dataFinal = RandomizeArray();
                let dataFiltred = [];
                if(level === 1){
                    dataFinal.forEach((element) => {
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
                    setPerson(dataFinal);
                    setPersonSelected(dataFinal[0]);
                }
			})
        }else{
            let dataFinal = RandomizeArray();
            let dataFiltred = [];
            if(level === 1){
                dataFinal.forEach((element) => {
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
                setPerson(dataFinal);
                setPersonSelected(dataFinal[0]);
            }
        }
    }, [level]);

    const changeDimension = () => {
        if(imageRef.current.naturalHeight > imageRef.current.naturalWidth){
            setImageHorizontal("imageVerticale")
        }else{
            setImageHorizontal("containerFlexible imageHorizontale")
        }
    }

    return(
    <>
        <div className="container">
            <div className="d-block d-sm-block d-md-block d-lg-none">
                <NavBarJeux />
            </div>
            {!personSelected &&
                <h2>Les données arrivent. Soyez patient</h2>
            }
            {personSelected && total !== maximum &&
                <div className="text-center">
                    <h2 className="text-center mt-3">Quel est mon prénom ?</h2>
                    <div className={imageHorizontal}><img ref={imageRef} src={personSelected.pictureName} alt={personSelected.firstName} onLoad={changeDimension}/></div>
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
