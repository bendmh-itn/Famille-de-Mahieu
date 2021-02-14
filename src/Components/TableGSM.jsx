import React from 'react';
import ElementTableauGSM from './elementTableauGSM';

const TableGSM = ({famille}) => {
    return ( 
        <>
            {famille[0] !== undefined &&
                <h2 className="text-center">{famille[0].famillyName}</h2>
            }
            <table>
                <tbody>
                        {
                            famille.map((person) =>
                            
                                <ElementTableauGSM
                                    key={person.firstName + "" + person.famillyName}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDate}
                                    dateDeces={person.deathDate}
                                    link={person.generation === "4" ? "#" :  "/" + person.generation + "/" + person.numberFamilly }  
                                />
                        )}
                </tbody>
            </table>
        </>
     );
}
 
export default TableGSM;