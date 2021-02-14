import React from 'react';
import TableOrdi from './tableau'
import TableGSM from './TableGSM'


const AllTable = ({famille}) => {
    return ( 
        <>
            <h1>{famille[0].famillyName}</h1>
            {/*<div className="d-none d-sm-none d-md-block">
                <TableOrdi 
                    tabParents={tabParents}
                    tabEnfants1={tabEnfants1}
                    tabEnfants2={tabEnfants2}
                    numberParent={numberParent}
                    numberEnfant={numberEnfant}
                />
    </div>*/}
            <div>
                <TableGSM 
                    famille={famille}
                />
            </div>
        </>
     );
}
 
export default AllTable;