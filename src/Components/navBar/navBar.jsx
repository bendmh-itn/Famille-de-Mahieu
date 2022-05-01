import React from 'react';
import { NavLink } from "react-router-dom";
import Firebase from "../../firebase";

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
                            <NavLink className="navbar-brand" to="/anniversaire" >Anniversaires</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="navbar-brand dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Génération
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/generation2">Génération 2</NavLink>
                                <NavLink className="dropdown-item" to="/generation3">Génération 3</NavLink>
                                <NavLink className="dropdown-item" to="/generation4">Génération 4</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="navbar-brand dropdown-toggle" to="#" id="navbarDropdownJeux" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Jeux
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/jeu2">Jeu 1</NavLink>
                                <NavLink className="dropdown-item" to="/jeu">Jeu 2</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/events">Événements</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/profil">Profil</NavLink>
                        </li>
                    </ul>
                    {(localStorage.getItem("email") === null || localStorage.getItem("email") === "") &&
                        <button
                            className="buttonConnexion navbar-brand text-right" onClick = {() => {Firebase.signInWithGoogle()}}>
                            Connexion
                        </button>
                    }
                    {localStorage.getItem("email") !== null && localStorage.getItem("email") !== "" &&
                        <button
                            className="buttonConnexion navbar-brand text-right" onClick = {() => {Firebase.Disconnect()}}>
                            Déconnexion
                        </button>
                    }
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;