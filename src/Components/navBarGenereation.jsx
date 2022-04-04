import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from "react-router-dom";

const NavBarGeneration = () => {
    const [menuSelected, setMenuSelected] = useState("generation2");

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
                <NavLink onClick={() => changeMenuSelected("generation2")} className="navbar-brand" to="/generation2">
                    {menuSelected === "generation2" && <ion-icon name="reorder-two-sharp"></ion-icon>}
                    {menuSelected !== "generation2" && <ion-icon name="reorder-two-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("generation3")} className="navbar-brand" to="/generation3">
                    {menuSelected === "generation3" && <ion-icon name="reorder-three-sharp"></ion-icon>}
                    {menuSelected !== "generation3" && <ion-icon name="reorder-three-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("generation4")} className="navbar-brand" to="/generation4">
                    {menuSelected === "generation4" && <ion-icon name="reorder-four-sharp"></ion-icon>}
                    {menuSelected !== "generation4" && <ion-icon name="reorder-four-outline"></ion-icon>}
                </NavLink>
            </nav>
        </>
     );
}
 
export default NavBarGeneration;