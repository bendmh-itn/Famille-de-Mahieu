import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <>
            Voici les générations completes pour l'instant : 
            <ol>
                <NavLink to="/deMahieu-deVinck"><li>Famille de Mahieu - de Vinck</li></NavLink>
                <NavLink to="/Rolin - de Mahieu"><li>Famille Rolin - de Mahieu</li></NavLink>
            </ol>
        </>
     );
}
 
export default HomePage;