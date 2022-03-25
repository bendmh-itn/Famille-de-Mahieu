import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { FilterByGeneration, getData, copyData } from '../Functions/FilterData';
import fireBase from '../firebase';
import {ACTUAL_GENERATION} from "../constant"


const Generation3 = () => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
	
    useEffect(() => {
		let dataFinal;
        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
                dataFinal = FilterByGeneration("3");
                //checkForBirthday(dataFinal);
                setFamillyFiltred(dataFinal);
			})
        }else{
            dataFinal = FilterByGeneration("3");
            //checkForBirthday(dataFinal);
            setFamillyFiltred(dataFinal);
        }
    }, []);

    return ( 
        <>
            <div className="container">
			    <h1 className="text-uppercase text-center">La 3<sup className="text-lowercase">ème</sup> génération</h1>
                <h3 className="mb-4">Nous sommes {famillyFiltred.length} personnes</h3>
            </div>
			<div className="containerFlexible">
			{
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
					/>
					}
				
			)}
			</div>
        </>
     );
}
 
export default Generation3;