import React from 'react';
import Select from 'react-select'


const SelectModifyPerson = ({data, modifyPerson, isClearable = true}) => {
    const searchFamilly = (event) => {
        if(event !== null){
            modifyPerson(event.value)
        }else{
            modifyPerson(null);
        }
    }

    return ( 
        <>
            <Select id="searchFamilly" options={data} isClearable={isClearable} isSearchable={true} onChange={searchFamilly} />
        </>
     );
}
 
export default SelectModifyPerson;