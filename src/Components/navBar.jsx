import React from 'react';
import { NavLink } from "react-router-dom";
import Firebase from "../firebase";

const NavBar = () => {
    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" replace >
                        Famille de Mahieu
                    </NavLink>
                    <button
                        className="buttonConnexion" onClick = {() => {Firebase.signInWithGoogle()}}>
                        Connexion
                    </button>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;