import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { FilterByGeneration } from '../Functions/FilterData';
import {ACTUAL_GENERATION} from "../constant"


const Generation3 = () => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
	
    useEffect(() => {
        let data = FilterByGeneration("3");
        setFamillyFiltred(data);
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