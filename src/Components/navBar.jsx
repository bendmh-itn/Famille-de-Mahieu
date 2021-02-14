import React from 'react';
import { NavLink } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const NavBar = () => {
    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Famille de Mahieu
                    </NavLink>
                    <button
                        className="buttonConnexion" onClick = {() => {signInWithGoogle()}}>
                        Connexion
                    </button>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;