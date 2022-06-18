import React, {useState} from 'react';
import { MyFilter } from '../../Functions/FilterData';
import { CreateUserFireBase } from '../../firebase';


const ModalAddPoeple = ({personSelect}) => {
    let generation = personSelect.generation*1 + 1;
    let numberOfChildrens = MyFilter(personSelect.numberFamilly, personSelect.generation).filter((person) => person.generation === "" + generation).length;
    let numberChildren = personSelect.numberFamilly*10 + numberOfChildrens +1;
    const [data, setData] = useState({famillyName: personSelect.famillyName, lastName : "", firstName: "", birthDate : "", numberFamilly : "" + numberChildren, generation : ""+generation, dateMariage: ""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleChangeRadio = (e) => {
        let numberPartner = personSelect.numberFamilly*10;
        let numberOfChildrens = MyFilter(personSelect.numberFamilly, personSelect.generation).filter((person) => person.generation === person.generation + 1).length;
        
        let numberChildren = personSelect.numberFamilly*10 + numberOfChildrens +1;
        let numberFamilly = parseInt(data.numberFamilly) === numberChildren ? numberPartner : numberChildren;
        let generation = parseInt(data.generation) === personSelect.generation*1 + 1 ? personSelect.generation : personSelect.generation*1 + 1;
        setData({
            ...data,
            "numberFamilly": "" + numberFamilly,
            "generation" : "" + generation
        });
    }

    return ( 
        <>
            <div className="modal fade" id="addPeople" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ajouter une personne dans ma famille</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Nom</label>
                            <input className="form-control" name='lastName' placeholder="Nom..." onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Prénom</label>
                            <input className="form-control" name='firstName' placeholder="Prénom..." onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Date de naissance (avec / entre les nombres)</label>
                            <input className="form-control" name='birthDate' placeholder="Date de naissance..." onChange={handleChange}/>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleChangeRadio} />
                           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change si tu ajoutes un(e) conjoint(e)</label>
                        </div>
                        <div className="form-group">
                            <label>L'image s'ajoute juste après la création</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => CreateUserFireBase(data).then(() => {window.location.reload(false)})}>Ajouter</button>
                    </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalAddPoeple