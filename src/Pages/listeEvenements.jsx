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
    const [userId, setUserId] = useState();
	
    useEffect(() => {
        window.scroll(0, 0);
        const userId = getUserData().id;
        if(userId === undefined){
            PutDataLocalStorage(localStorage.getItem("email")).then((result) => {
                if(result === undefined || result.id === undefined){
                    setClassName("d-none")
                }else {
                    setClassName("d-block");
                    setUserId(result.id);                
                }
            });
        }else {
            setClassName("d-block");
            setUserId(userId);
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
    }, [id]);

    return ( 
        <>
            {!id &&
                <>
                    <h1 className="text-center mb-3 moreSize">Fil d'actualité</h1>
                    <div className={'text-center mb-3 ' + className }>
                        <ModalCreateEvent
                            userId={userId}
                        />
                    </div>
                    {
                         events.map((event) => {
                            return(
                                <EventFlex key={event.id} event={event} userId={userId} />
                            )
                        })
                    }
                </>
            }
            {id && 
                    events.filter((event) => event.id === id).map((event) => {
                        return(
                            <EventFlex key={event.id} event={event} id={id} userId={userId} />
                        )
                    })
                }
			
        </>
     );
}
 
export default ListeEvenements;