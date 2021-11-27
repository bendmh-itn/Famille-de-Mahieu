import React from 'react';
import { NavLink } from "react-router-dom";
import Firebase from "../firebase";

const NavBar = () => {
    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <NavLink className="navbar-brand" to="/">Famille de Mahieu</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/anniversaire" >Annif</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/generation3">Génération 3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/generation4">Génération 4</NavLink>
                        </li>
                    </ul>
                    <button
                        className="buttonConnexion navbar-brand text-right" onClick = {() => {Firebase.signInWithGoogle()}}>
                        Connexion
                    </button>
                </div>
    </nav>
            {/*<nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" replace >
                        Famille de Mahieu
                    </NavLink>
                    <NavLink className="navbar-brand" to="/anniversaire" >
                        Annif
                    </NavLink>
                    <button
                        className="buttonConnexion" onClick = {() => {Firebase.signInWithGoogle()}}>
                        Connexion
                    </button>
                </div>
</nav>*/}
        </>
     );
}
 
export default NavBar;