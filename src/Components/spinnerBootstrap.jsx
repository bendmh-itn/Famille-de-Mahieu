import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerBootstrap = () => {
    return (
        <>
        <Spinner animation="border" role="status">
        </Spinner>
        <span>Loading data</span>
        </>
     );
}
 
export default SpinnerBootstrap;