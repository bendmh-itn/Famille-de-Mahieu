import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import { MoisPersons, getData, copyData } from '../Functions/FilterData';
import {ACTUAL_GENERATION} from "../constant";
import fireBase from '../firebase';
//import axios from 'axios';


const Anniversaire = () => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    //const [messageSended, setMessageSended] = useState(false);

    /*const sendMessage = (person) => {
        const response = axios.get("https://test-service-6568.twil.io/sendSMS?firstname="+ person.firstName + "&lastname=" + person.lastName);
        console.log(response);
    }*/
	
    useEffect(() => {
        const months = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'aout',
            'septembre',
            'octobre',
            'novembre',
            'décembre'
          ]
        let now = new Date();
        setMonth(months[now.getMonth()]);
        setDay(now.getDate());

        /*const checkForBirthday = (data) => {
            let send = false;
            data.forEach(person => {
                if(person.birthDate.split("/")[0] === (now.getDate().toString() < 10 ? "0" + now.getDate().toString() : now.getDate().toString())){
                    if(!messageSended){
                        sendMessage(person);
                    }
                    send = true;
                }
            });
            if(send){
                fireBase.ChangeMessageSended();
            }
        }*/
        let dataFinal;
        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
                dataFinal = MoisPersons();
                /*
                fireBase.MessageSended()
                .then((doc) => {
                    let messageSended = doc.data().send;
                    setMessageSended(messageSended);
                    console.log(messageSended);
                    checkForBirthday(dataFinal);
                })*/
                setFamillyFiltred(dataFinal);
			})
        }else{
            dataFinal = MoisPersons();
            /*fireBase.MessageSended()
            .then((doc) => {
                let messageSended = doc.data().send;
                setMessageSended(messageSended);
                console.log(messageSended);
                checkForBirthday(dataFinal);
            })*/
            setFamillyFiltred(dataFinal);
        }
    }, []);

    return ( 
        <>
            <div className="container">
			    <h2 className="text-center mb-3">{famillyFiltred.length} anniversaire(s) en {month}</h2>
            </div>
			<div className="containerFlexible">
			{
				famillyFiltred !== undefined && 
                    famillyFiltred
					.map((person) => {
					return <TrombinoscopeFlex
						key={person.firstName + "" + person.famillyName}
						lienImage={person.pictureName}
						prenomNom={person.firstName + " " + person.lastName}
						dateDeNaissance= {person.birthDate}
						dateDeces={person.deathDate}
						link={person.generation === ACTUAL_GENERATION || person.generation === "1" ? "#" :  "/" + person.generation + "/" + person.numberFamilly }
						generation={person.generation}
                        myBirthday={person.birthDate.split("/")[0] === (day.toString() < 10 ? "0" + day.toString() : day.toString()) ? true : false}
					/>
					}
				
			)}
			</div>
        </>
     );
}
 
export default Anniversaire;