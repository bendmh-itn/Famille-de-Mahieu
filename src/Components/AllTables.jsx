import React from 'react';
import TableOrdi from './tableau'
import TableGSM from './TableGSM'


const AllTable = ({tabParents, tabEnfants1 = [], tabEnfants2= [], numberParent=1, numberEnfant=1}) => {
    return ( 
        <>
            <div className="d-none d-sm-none d-md-block">
                <TableOrdi 
                    tabParents={tabParents}
                    tabEnfants1={tabEnfants1}
                    tabEnfants2={tabEnfants2}
                    numberParent={numberParent}
                    numberEnfant={numberEnfant}
                />
            </div>
            <div className="d-block d-sm-block d-md-none">
                <TableGSM 
                    tabParents={tabParents}
                    tabEnfants1={tabEnfants1}
                    tabEnfants2={tabEnfants2}
                    numberParent={numberParent}
                    numberEnfant={numberEnfant}
                />
            </div>
        </>
     );
}
 
export default AllTable;