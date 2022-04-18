import React, { useState} from 'react';
import { Carousel } from 'react-bootstrap';
import { getRefPicture, changePictureProfil } from '../firebase';

const ControlledCarousel = ({person, id}) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const DeletePicture = (photo) => {
        var res = window.confirm("Cette photo sera supprimé définitivement. Êtes-vous sûr de vouloir la supprimer ?");
        if(res) {
            getRefPicture(photo, id).then(() => {
                window.location.reload(false);
            })
        }
    }

    const ChoosePicture = (photo) => {
        changePictureProfil(id, photo).then(() => {
            window.location.reload(false);
        })
    }

    return ( 
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {
            person.PhotosHistory && person.PhotosHistory.map((photo) => {
                    return (
                    <Carousel.Item key={photo}>
                        <div className='float'>
                        {
                            person.pictureName !== photo &&
                            <>
                                <ion-icon class="myIcon" size="large" name="trash-outline" onClick={() => DeletePicture(photo)}></ion-icon>
                                <ion-icon class="myIcon" size="large" name="star-outline" onClick={() => ChoosePicture(photo)}></ion-icon>
                            </>
                        }
                        {
                            person.pictureName === photo &&
                            <ion-icon class="myIcon" size="large" name="star-sharp" onClick={() => ChoosePicture(photo)}></ion-icon>
                        }
                        </div>
                        <div className="d-flex justify-content-center">
                                <img
                                className="d-block"
                                src={photo}
                                alt={"Slide n° " + index}
                                />
                        </div>
                </Carousel.Item>)
            })}
      </Carousel>
     );
}
 
export default ControlledCarousel;