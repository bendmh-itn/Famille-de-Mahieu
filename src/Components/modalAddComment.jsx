import React, { useState} from 'react';
import { addCommentInPicture } from '../firebase';


const ModalAddComment = ({id, picturesList, index}) => {
    const [data, setData] = useState("");

    const writeComment = (e) => {
        if(e!== null){
            const { value } = e.target;
            setData(value);
        }
    }

    const getData = () => {
        picturesList[index].comment = data;
        addCommentInPicture(id, picturesList).then(() => {
            window.location.reload(false);
        })
    }

    return ( 
        <>
            <div className="modal fade" id="addComment" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un commentaire</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Votre commentaire</label>
                        <input className="form-control" placeholder="Votre commentaire" name="commentaire" onChange={writeComment} required></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={getData}>{picturesList[index] && picturesList[index].comment ? "Modifier": "Créer"}</button>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ModalAddComment