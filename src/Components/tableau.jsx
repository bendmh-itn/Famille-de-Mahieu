import React from 'react';
import ElementTableau from './elementTableau';

const Table = ({tabParents, tabEnfants1 = [], tabEnfants2=[], numberParent=1, numberEnfant=1}) => {
    return ( 
        <>
            <table>
                <tbody>
                    <tr>
                        {
                            tabParents.map((person) =>
                            
                                <ElementTableau
                                    key={person.firstName}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
                                    number={numberParent}
                                />
                        )}
                    </tr>
                    <tr>
                        {
                            tabEnfants1.map((person) =>
                                <ElementTableau
                                    key={person.firstName}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
                                    link={person.link}
                                    number={numberEnfant}
                                />
                        )}
                    </tr>
                    <tr>
                        {
                            tabEnfants2.map((person) =>
                                <ElementTableau
                                    key={person.firstName}
                                    lienImage={person.pictureName}
                                    prenomNom={person.firstName + " " + person.lastName}
                                    dateDeNaissance= {person.birthDateText}
                                    link={person.link}
                                />
                        )}
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default Table;