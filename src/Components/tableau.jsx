import React from 'react';
import ElementTableau from './elementTableau';

const Table = ({tabParents, tabEnfants1, tabEnfants2=[], number=2}) => {
    return ( 
        <>
            <table className="table-responsive">
                <tbody>
                    <tr>
                        {
                            tabParents.map((name) =>
                            
                                <ElementTableau
                                    key={name.firstName}
                                    lienImage={name.pictureName}
                                    prenomNom={name.firstName + " " + name.lastName}
                                    dateDeNaissance= {name.birthDateText}
                                    number="2"
                                />
                        )}
                    </tr>
                    <tr>
                        {
                            tabEnfants1.map((name) =>
                                <ElementTableau
                                    key={name.firstName}
                                    lienImage={name.pictureName}
                                    prenomNom={name.firstName + " " + name.lastName}
                                    dateDeNaissance= {name.birthDateText}
                                />
                        )}
                    </tr>
                    <tr>
                        {
                            tabEnfants2.map((name) =>
                                <ElementTableau
                                    key={name.firstName}
                                    lienImage={name.pictureName}
                                    prenomNom={name.firstName + " " + name.lastName}
                                    dateDeNaissance= {name.birthDateText}
                                />
                        )}
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default Table;