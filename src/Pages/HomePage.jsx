import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <>
            <p>Voici les générations complètes pour l'instant</p>
            <ol>
                <li><NavLink to="/de Bernard de Fauconval - de Mahieu">Famille de Bernard de Fauconval - de Mahieu</NavLink></li>
                <li><NavLink to="/legast-deMahieu">Famille Legast - de Mahieu</NavLink></li>
                <li><NavLink to="/deMahieu-deVinck">Famille de Mahieu - de Vinck</NavLink></li>
                <li><NavLink to="/Rolin - de Mahieu">Famille Rolin - de Mahieu</NavLink></li>
                <li><NavLink to="/de Mahieu - Vandermeersch">Famille de Mahieu - Vandermeersch</NavLink></li>
                <li><NavLink to="/van Delft - de Mahieu">Famille van Delft - de Mahieu</NavLink></li>
                <li><a href="https://drive.google.com/file/d/1fkrakwIsvxVnX5PhBokSStJmdF3xSmAG/view?usp=sharing">Voir toutes les photos</a></li>
            </ol>
        </>
     );
}
 
export default HomePage;