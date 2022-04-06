import React, { useEffect, useState } from 'react';
import { getEvents } from '../firebase';
import EventFlex from '../Components/eventsFlex';
import { useParams } from "react-router-dom";
import ModalCreateEvent from '../Components/modalCreateEvent';
import { getUserData } from '../Functions/cache';
import { PutDataLocalStorage } from '../firebase';

const ListeEvenements = () => {
    const [events, setEvents] = useState([]);
    const {id} = useParams();
    const [className, setClassName] = useState("d-none");
	
    useEffect(() => {
        const userId = getUserData().id;
        if(userId === undefined){
            PutDataLocalStorage(localStorage.getItem("email")).then((result) => {
                if(result && result.id === undefined){
                    setClassName("d-none")
                }else {
                    setClassName("d-block");
                }
            });
        }else {
            setClassName("d-block");
        }
        getEvents().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({"id": doc.id, "value": doc.data()});
            });
            setEvents(data);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }, []);

    return ( 
        <>
            {!id &&
                <>
                    <h1 className="text-center mb-3 moreSize">Fil d'actualité</h1>
                    <div className={'text-center mb-3 ' + className }>
                        <ModalCreateEvent />
                    </div>
                    {
                         events.map((event) => {
                            return(
                                <EventFlex key={event.id} event={event} />
                            )
                        })
                    }
                </>
            }
            {id && 
                    events.filter((event) => event.id === id).map((event) => {
                        return(
                            <EventFlex key={event.id} event={event} id={id} />
                        )
                    })
                }
			
        </>
     );
}
 
export default ListeEvenements;