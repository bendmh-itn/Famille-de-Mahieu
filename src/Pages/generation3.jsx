import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { FilterByGeneration, getData, copyData } from '../Functions/FilterData';
import fireBase from '../firebase';
import {ACTUAL_GENERATION} from "../constant";
import NavBarGeneration from '../Components/navBar/navBarGenereation';


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
                setFamillyFiltred(dataFinal);
			})
        }else{
            dataFinal = FilterByGeneration("3");
            setFamillyFiltred(dataFinal);
        }
    }, []);

    return ( 
        <>
            <div className="container">
				<div className="d-block d-sm-block d-md-block d-lg-none">
					<NavBarGeneration />
				</div>
			    <h1 className="text-uppercase text-center">La 3<sup className="text-lowercase">ème</sup> génération</h1>
                <h3 className="mb-4">Nous sommes {famillyFiltred.length} personnes</h3>
            </div>
			<div className="containerFlexible">
			{
				famillyFiltred
					.map((person) => {
					return <TrombinoscopeFlex
						person={person}
						key={person.firstName + "" + person.famillyName}
						link={person.generation === ACTUAL_GENERATION || person.generation === "1" ? "#" :  "/" + person.generation + "/" + person.numberFamilly } 
					/>
					}
				
			)}
			</div>
        </>
     );
}
 
export default Generation3;