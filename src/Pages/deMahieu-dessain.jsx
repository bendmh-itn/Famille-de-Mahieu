import React, { useEffect, useState } from 'react';
import TableGSM from '../Components/TableGSM';
import { MyFilter } from '../Functions/FilterData';
import fireBase from '../firebase'


const Family = ({match}) => {

	const [famillyFiltred, setFamillyFiltred] = useState([]);
	
    useEffect(() => {
		
		fireBase.findAll()
		.then(querySnapshot => {
			var numberFamilly = match.params.numberFamilly;
			var generation = match.params.generation;
			if(generation === undefined || numberFamilly === undefined){
				numberFamilly = 0;
				generation = 1;
			}
			const data = querySnapshot.docs.map(doc => doc.data());
			const FilterData = MyFilter(data, numberFamilly, generation);
			setFamillyFiltred([]);
			setFamillyFiltred(FilterData);
			window.scroll(0, 0);
		})
    }, [match.params.generation, match.params.numberFamilly]);
    return ( 
        <>
            <TableGSM 
                famille={famillyFiltred}
            />
        </>
     );
}
 
export default Family;