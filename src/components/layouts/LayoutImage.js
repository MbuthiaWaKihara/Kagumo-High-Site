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
                    height: 700px;
                    position: relative;
                    top: -100px;
                }
                .carousel-wrap {
                    height: 400px;
                }

                .carousel-indicators {
                    display: none;
                }
                @media only screen and (max-width: 600px) {
                    .layout-carousel-image {
                        height: 300px;
                    }

                    .layout-carousel-image {
                        height: 200px;
                        top: 0px;
                    }

                    .carousel-wrap {
                        height: 200px;
                    }

                }
            `}
            </style>
            <Carousel className="carousel-wrap">
                <Carousel.Item>
                    <img
                    src={imageSource}
                    className="layout-carousel-image"
                    alt="Layout"
                    height="550"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default LayoutImage;
