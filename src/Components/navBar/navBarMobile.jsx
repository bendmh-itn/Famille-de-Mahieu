import React, {useState, useEffect} from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Firebase from "../../firebase";

const NavBarMobile = () => {
    const [menuSelected, setMenuSelected] = useState("");

    const changeMenuSelected = (menu) => {
        setMenuSelected(menu);
    }
    const location = useLocation();
    useEffect(() => {
        setMenuSelected(location.pathname.substring(1));
    }, [location]);

    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <NavLink onClick={() => changeMenuSelected("")} className="navbar-brand" to="/">
                    {(menuSelected === "" || menuSelected.includes("event")) && <ion-icon name="home-sharp"></ion-icon>}
                    {menuSelected !== "" && !menuSelected.includes("event") && <ion-icon name="home-outline"></ion-icon>}  
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("anniversaire")} className="navbar-brand" to="/anniversaire">
                    {menuSelected === "anniversaire" && <ion-icon name="balloon-sharp"></ion-icon>}
                    {menuSelected !== "anniversaire" && <ion-icon name="balloon-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("generation")} className="navbar-brand" to="/generation2">
                    {menuSelected.includes("generation") && <ion-icon name="list-sharp"></ion-icon>}
                    {!menuSelected.includes("generation") && <ion-icon name="list-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("jeu")} className="navbar-brand" to="/jeu2">
                    {menuSelected.includes("jeu") && <ion-icon name="game-controller-sharp"></ion-icon>}
                    {!menuSelected.includes("jeu") && <ion-icon name="game-controller-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("arbre")} className="navbar-brand" to="/arbre">
                    {menuSelected.includes("arbre") && <ion-icon name="git-network"></ion-icon>}
                    {!menuSelected.includes("arbre") && <ion-icon name="git-network-outline"></ion-icon>}
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