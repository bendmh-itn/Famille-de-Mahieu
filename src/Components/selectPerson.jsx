import React from 'react';
import Select from 'react-select'
import { useHistory } from 'react-router-dom';
import { MoisPersons } from '../Functions/FilterData';


const SelectPerson = ({data}) => {
    const history = useHistory();
    const searchFamilly = (event) => {
        if (event !== null){
            history.push('/' + event.value);
            MoisPersons();
        }
    }

    return ( 
        <>
            <Select options={data} isClearable={true} isSearchable={true} onChange={searchFamilly} />
        </>
     );
}
 
export default SelectPerson;