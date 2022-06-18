import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { MoisPersons, getData, copyData } from '../Functions/FilterData';
import {ACTUAL_GENERATION} from "../constant";
import fireBase from '../firebase';


const Anniversaire = () => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
	
    useEffect(() => {
        const months = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'aout',
            'septembre',
            'octobre',
            'novembre',
            'décembre'
          ]
        let now = new Date();
        setMonth(months[now.getMonth()]);
        setDay(now.getDate());
        let dataFinal;
        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
                dataFinal = MoisPersons();
                setFamillyFiltred(dataFinal);
			})
        }else{
            dataFinal = MoisPersons();
            setFamillyFiltred(dataFinal);
        }
    }, []);

    return ( 
        <>
            <div className="container">
			    <h2 className="text-center mb-3">{famillyFiltred.length} anniversaire(s) en {month}</h2>
            </div>
			<div className="containerFlexible">
			{
				famillyFiltred !== undefined && 
                    famillyFiltred
					.map((person) => {
					return <TrombinoscopeFlex
                        person={person}
						key={person.firstName + "" + person.famillyName}
						link={person.generation === ACTUAL_GENERATION || person.generation === "1" ? "#" :  "/" + person.generation + "/" + person.numberFamilly }
                        myBirthday={person.birthDate.split("/")[0] === (day.toString() < 10 ? "0" + day.toString() : day.toString()) ? true : false}
					/>
					}
				
			)}
			</div>
            <div>
                <h2>Sous forme d'agenda</h2>
                <iframe
                    title="Agenda des anniversaires"
                    src="https://calendar.google.com/calendar/embed?src=family01141181756414071522%40group.calendar.google.com&ctz=Europe%2FBrussels"
                    width="100%"
                    height="500px"
                    scrolling="no"
                />
            </div>
        </>
     );
}
 
export default Anniversaire;