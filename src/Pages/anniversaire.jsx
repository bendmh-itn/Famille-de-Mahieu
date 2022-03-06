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
    }, []);

    return ( 
        <>
            <div className="container">
			    <h2 className="text-center">Anniversaire de {month}</h2>
            </div>
			<div className="containerFlexible">
			{
				famillyFiltred !== undefined && 
                    famillyFiltred
					.map((person) => {
					return <TrombinoscopeFlex
						key={person.firstName + "" + person.famillyName}
						lienImage={person.pictureName}
						prenomNom={person.firstName + " " + person.lastName}
						dateDeNaissance= {person.birthDate}
						dateDeces={person.deathDate}
						link={person.generation === ACTUAL_GENERATION || person.generation === "1" ? "#" :  "/" + person.generation + "/" + person.numberFamilly }
						generation={person.generation}
                        myBirthday={person.birthDate.split("/")[0] === (day.toString() < 10 ? "0" + day.toString() : day.toString()) ? true : false}
					/>
					}
				
			)}
			</div>
        </>
     );
}
 
export default Anniversaire;