import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { MoisPersons } from '../Functions/FilterData';


const Anniversaire = () => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
    const [month, setMonth] = useState("");
	
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
		let data = MoisPersons();
        let now = new Date();
        setMonth(months[now.getMonth()]);
        setFamillyFiltred(data);
    }, []);

    return ( 
        <>
            <div className="container">
			    <h2 className="text-center">Anniversaire de {month}</h2>
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
						link={person.generation === "4" || person.generation === "1" ? "#" :  "/" + person.generation + "/" + person.numberFamilly }
						generation={person.generation}  
					/>
					}
				
			)}
			</div>
        </>
     );
}
 
export default Anniversaire;