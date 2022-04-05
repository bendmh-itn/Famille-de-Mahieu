import React, { useEffect, useState } from 'react';
import { getEvents } from '../firebase';
import EventFlex from '../Components/eventsFlex';
import { useParams } from "react-router-dom";
import ModalCreateEvent from '../Components/modalCreateEvent';


const ListeEvenements = () => {
    const [events, setEvents] = useState([]);
    const {id} = useParams();
	
    useEffect(() => {
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
                    <div className='text-center mb-3'>
                        {localStorage.getItem("userId") &&
                            <ModalCreateEvent />
                        }
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