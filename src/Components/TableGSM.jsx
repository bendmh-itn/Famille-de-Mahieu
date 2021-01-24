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
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
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
                                    link={person.link}
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
                                    link={person.link}
                                />
                        )}
                </tbody>
            </table>
        </>
     );
}
 
export default TableGSM;