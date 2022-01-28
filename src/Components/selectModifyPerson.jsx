import React from 'react';
import Select from 'react-select'


const SelectModifyPerson = ({data, modifyPerson}) => {
    const searchFamilly = (event) => {
        if(event !== null){
            modifyPerson(event.value)
        }else{
            modifyPerson(null);
        }
    }

    return ( 
        <>
            <Select id="searchFamilly" options={data} isClearable={true} isSearchable={true} onChange={searchFamilly} />
        </>
     );
}
 
export default SelectModifyPerson;