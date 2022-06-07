import React, { useEffect, useState} from 'react';
import { AddElementInPhoto, modifyPhotosInEvent } from '../../firebase';


const ModalAddLink = ({id, userId, index, picturesList}) => {
    const [data, setData] = useState({title : index !== -1 ? picturesList[index].texte : "", link: index !== -1 ? picturesList[index].link : ""});
    
    const chooseTitle = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    const chooseLink = (e) => {
        if(e!== null){
            const { name, value } = e.target;
            setData({
                ...data,
                [name]: value
            });
        }
    }

    const getData = () => {
        AddElementInPhoto(id, data, userId, "link").then(() => {
            window.location.reload(false);
        })
    }

    const updateData = () => {
        console.log(id);
        picturesList[index].link = data.link
        picturesList[index].texte = data.title
        modifyPhotosInEvent(id, picturesList).then(() => {
            window.location.reload(false);
        })
    }

    useEffect(() => {
        setData({title : index !== -1 && picturesList[index].texte ? picturesList[index].texte : "", link: index !== -1 && picturesList[index].link ? picturesList[index].link : ""})
    }, [index, picturesList])

    return ( 
        <>
            <div className="modal fade" id="addLink" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un lien</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Texte à afficher</label>
                        <input className="form-control" value={data.title} placeholder="texte à afficher" name="title" onChange={chooseTitle} required></input>
                    </div>
                    <div className="form-group">
                        <label>Lien web</label>
                        <input className="form-control" value={data.link} placeholder="lien web" name="link" onChange={chooseLink} required></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={index === -1 ? getData : updateData}>{index === -1 ? "Ajouter" : "changer"}</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalAddLink