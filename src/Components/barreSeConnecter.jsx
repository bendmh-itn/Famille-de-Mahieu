import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './Providers/UserProvider';


const BarreSeConnecter = () => {
    const [className, setClassName] = useState("d-none");

    const value = useContext(UserContext);
    useEffect(() => {
        if(value === null){
            setClassName("d-block");
        }else {
            setClassName("d-none");
        }
    },[value]);

    return ( 
        <>
            <div className={"alert alert-danger " + className } role="alert">
                <p>Les données ne vont pas arriver, il faut te connecter</p>
            </div>
        </>
     );
}
 
export default BarreSeConnecter;