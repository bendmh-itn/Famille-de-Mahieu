import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import fireBase from '../firebase';
import { MyFilter, DataInOptions, copyData, getData } from '../Functions/FilterData';
import SelectPerson from '../Components/selectPerson';
import {ACTUAL_GENERATION} from "../constant";


const Family = ({match}) => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
	const [generation, setGeneration] = useState("");
	const [options, setOptions] = useState([]);
	
    useEffect(() => {
		var numberFamilly = match.params.numberFamilly;
		var generation = match.params.generation;
		setGeneration(match.params.generation);
		if(generation === undefined || numberFamilly === undefined){
			numberFamilly = 0;
			generation = "1";
			setGeneration("1")
		}
        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
				const FilterData = MyFilter(numberFamilly, generation);
				setFamillyFiltred([]);
				setFamillyFiltred(FilterData);
        		setOptions(DataInOptions());
				window.scroll(0, 0);
			})
        }else{
            const FilterData = MyFilter(numberFamilly, generation);
			setOptions(DataInOptions());
			setFamillyFiltred([]);
			setFamillyFiltred(FilterData);
			window.scroll(0, 0);
        }
    }, [match.params.generation, match.params.numberFamilly]);
    return ( 
        <>
			<SelectPerson
				data={options}
			/>
			{famillyFiltred[0] !== undefined &&
				<div>
				<h1 className='mb-0'>{famillyFiltred[0].famillyName}</h1>
				{
					famillyFiltred[0].dateMariage !== undefined &&
					<h4 className='text-center mb-4'>{famillyFiltred[0].dateMariage}</h4>
				}
				{
					famillyFiltred[0].dateMariage === undefined &&
					<br />
				}
				</div>
			}
			<div className="containerFlexible">
			{
				famillyFiltred
					.filter(person => person.generation === generation)
					.map((person) => {
					return <TrombinoscopeFlex
						key={person.firstName + "" + person.famillyName}
						lienImage={person.pictureName}
						prenomNom={person.firstName + " " + person.lastName}
						dateDeNaissance= {person.birthDate}
						dateDeces={person.deathDate}
						link="#"
						generation={person.generation}
						//className='elementFlexibleCustom'
						//description={person.description}
					/>
					}
				
			)}
			</div>
			<div className="containerFlexible">
			{
				famillyFiltred
				.filter(person => person.generation !== generation)
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
 
export default Family;