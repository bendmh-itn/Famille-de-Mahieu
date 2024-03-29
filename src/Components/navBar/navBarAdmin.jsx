import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from "react-router-dom";

const NavBarAdmin = () => {
    const [menuSelected, setMenuSelected] = useState("admin/users");

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
                <NavLink onClick={() => changeMenuSelected("admin/users")} className="navbar-brand" to="/admin/users">
                    {menuSelected === "admin/users" && <ion-icon name="person-add"></ion-icon>}
                    {menuSelected !== "admin/users" && <ion-icon name="person-add-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("admin/pictures")} className="navbar-brand" to="/admin/pictures">
                    {menuSelected === "admin/pictures" && <ion-icon name="images"></ion-icon>}
                    {menuSelected !== "admin/pictures" && <ion-icon name="images-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("admin/emails")} className="navbar-brand" to="/admin/emails">
                    {menuSelected === "admin/emails" && <ion-icon name="mail"></ion-icon>}
                    {menuSelected !== "admin/emails" && <ion-icon name="mail-outline"></ion-icon>}
                </NavLink>
                <NavLink onClick={() => changeMenuSelected("admin/export")} className="navbar-brand" to="/admin/export">
                    {menuSelected === "admin/export" && <ion-icon name="settings"></ion-icon>}
                    {menuSelected !== "admin/export" && <ion-icon name="settings-outline"></ion-icon>}
                </NavLink>
            </nav>
        </>
     );
}
 
export default NavBarAdmin;