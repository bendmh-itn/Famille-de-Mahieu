import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from "react-router-dom";

const NavBarJeux = () => {
    const [menuSelected, setMenuSelected] = useState("jeu2");

    const changeMenuSelected = (menu) => {
        setMenuSelected(menu);
    }

    const location = useLocation();
    useEffect(() => {
        setMenuSelected(location.pathname.substring(1));
    }, [location]);

    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark space-around">
                <NavLink onClick={() => changeMenuSelected("generation2")} className="navbar-brand" to="/jeu2">
                    {menuSelected === "jeu2" && <ion-icon name="rocket"></ion-icon>}
                    {menuSelected !== "jeu2" && <ion-icon name="rocket-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("generation3")} className="navbar-brand" to="/jeu">
                    {menuSelected === "jeu" && <ion-icon name="baseball"></ion-icon>}
                    {menuSelected !== "jeu" && <ion-icon name="baseball-outline"></ion-icon>}
                </NavLink>
            </nav>
        </>
     );
}
 
export default NavBarJeux;