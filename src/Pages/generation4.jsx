import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { FilterByGeneration } from '../Functions/FilterData';
import {ACTUAL_GENERATION} from "../constant"


const Generation4 = () => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
	
    useEffect(() => {
        let data = FilterByGeneration("4");
        setFamillyFiltred(data);
    }, []);

    return ( 
        <>
            <div className="container">
			    <h2 className="text-uppercase text-center">La quatrième génération</h2>
                <p>Nous sommes {famillyFiltred.length} personnes</p>
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
 
export default Generation4;