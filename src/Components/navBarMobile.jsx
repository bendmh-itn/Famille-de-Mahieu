import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Firebase from "../firebase";

const NavBarMobile = () => {
    const [menuSelected, setMenuSelected] = useState("home");

    const changeMenuSelected = (menu) => {
        setMenuSelected(menu);
    }
    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <NavLink onClick={() => changeMenuSelected("home")} className="navbar-brand" to="/">
                    {menuSelected === "home" && <ion-icon name="home-sharp"></ion-icon>}
                    {menuSelected !== "home" && <ion-icon name="home-outline"></ion-icon>}  
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("annif")} className="navbar-brand" to="/anniversaire">
                    {menuSelected === "annif" && <ion-icon name="balloon-sharp"></ion-icon>}
                    {menuSelected !== "annif" && <ion-icon name="balloon-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("generation3")} className="navbar-brand" to="/generation3">
                    {menuSelected === "generation3" && <ion-icon name="reorder-three-sharp"></ion-icon>}
                    {menuSelected !== "generation3" && <ion-icon name="reorder-three-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("generation4")} className="navbar-brand" to="/generation4">
                    {menuSelected === "generation4" && <ion-icon name="reorder-four-sharp"></ion-icon>}
                    {menuSelected !== "generation4" && <ion-icon name="reorder-four-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("jeu")} className="navbar-brand" to="/jeu">
                    {menuSelected === "jeu" && <ion-icon name="game-controller-sharp"></ion-icon>}
                    {menuSelected !== "jeu" && <ion-icon name="game-controller-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("profil")} className="navbar-brand" to="/profil">
                    {menuSelected === "profil" && <ion-icon name="person-sharp"></ion-icon>}
                    {menuSelected !== "profil" && <ion-icon name="person-outline"></ion-icon>}
                </NavLink>
                {(localStorage.getItem("email") === null || localStorage.getItem("email") === "") &&
                    <button
                        className="buttonConnexion navbar-brand text-right" onClick = {() => {Firebase.signInWithGoogle()}}>
                        <ion-icon name="log-in-outline"></ion-icon>
                    </button>
                }
                {localStorage.getItem("email") !== null && localStorage.getItem("email") !== "" &&
                    <button
                        className="buttonConnexion navbar-brand text-right" onClick = {() => {Firebase.Disconnect()}}>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </button>
                }
            </nav>
        </>
     );
}
 
export default NavBarMobile;