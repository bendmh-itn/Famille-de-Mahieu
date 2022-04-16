import React, { useState} from 'react';
import { Carousel } from 'react-bootstrap';

const ControlledCarousel = ({person}) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return ( 
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {
            person.PhotosHistory && person.PhotosHistory.map((photo) => {
                    return (
                    <Carousel.Item key={photo}>
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