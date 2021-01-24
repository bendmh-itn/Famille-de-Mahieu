import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        de Mahieu
                    </NavLink>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;