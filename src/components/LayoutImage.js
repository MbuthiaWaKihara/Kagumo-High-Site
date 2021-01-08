import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

//style
// import '../styles/layout.css';

const LayoutImage = ({imageSource}) => {
    return (
        <>
            <style type="text/css">
            {`
                .layout-carousel-image {
                    width: 100%;
                }
                @media only screen and (max-width: 600px) {
                    .layout-carousel-image {
                        height: 300px;
                    }

                }
            `}
            </style>
            <Carousel>
                <Carousel.Item>
                    <img
                    src={imageSource}
                    className="layout-carousel-image"
                    alt="Layout Image"
                    height="600"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default LayoutImage;
