import React from 'react';
import ElementTableauGSM from './elementTableauGSM';

const TableGSM = ({tabParents=[], tabEnfants1 = [], tabEnfants2=[], numberParent=1, numberEnfant=1}) => {
    return ( 
        <>
            <table>
                <tbody>
                        {
                            tabParents.map((person) =>
                            
                                <ElementTableauGSM
                                    key={person.firstName}
                                    person={person}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
                                    dateDeces={person.deathDateText}
                                    number={numberParent}
                                />
                        )}
                        {
                            tabEnfants1.map((person) =>
                                <ElementTableauGSM
                                    key={person.firstName}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
                                    link={person.famillyName}
                                    number={numberEnfant}
                                />
                        )}
                        {
                            tabEnfants2.map((person) =>
                                <ElementTableauGSM
                                    key={person.firstName}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
                                    link={person.famillyName}
                                />
                        )}
                </tbody>
            </table>
        </>
     );
}
 
export default TableGSM;