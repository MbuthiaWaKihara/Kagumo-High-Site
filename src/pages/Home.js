import React from 'react';
import { carouselData } from '../utils/carousel-data';
import theme from '../styles/theme';

//bootstrap
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    React.useEffect(() => {
        document.title = "KHS | Welcome";
    }, []);

    return (
        <>
            <style type="text/css">
                {`
                .home-carousel-image {
                    width: 100%;
                }
                
                .carousel-caption {
                    position: absolute;
                    top: 30%;
                }

                .carousel-indicators {
                    display: none;
                }

                .carousel-readmore {
                    border: none;
                    background-color: ${theme.mainTartiary};
                    color: ${theme.mainPrimary};
                    border-radius: 50px;
                    width: 20%;
                    height: 20%;
                    font-family: Poppins;
                }

                .carousel-readmore:hover {
                    background-color: ${theme.mainSecondary};
                }
                .carousel-readmore:focus {
                    outline: none;
                }

                .carousel-title {
                    font-weight: bolder;
                    font-size: 4em;
                    font-family: Poppins;
                }

                .carousel-content {
                    font-weight: bolder;
                }

                @media only screen and (max-width: 600px) {
                    .home-carousel-image {
                        height: 300px;
                    }

                    .carousel-caption {
                        top: 10%;
                    }

                    .carousel-title {
                        font-size: 2em;
                    }
                    
                    .carousel-content {
                        font-size: .5em;
                    }

                    .carousel-readmore {
                        width: 40%;
                    }
                }
                `}
            </style>


                <div id="carousel-container">
                    <Carousel>
                        {
                            carouselData.map(carouselUnit => (
                                <Carousel.Item interval={5000}>
                                    <img
                                    className={carouselUnit.imageClassName}
                                    src={carouselUnit.imageSource}
                                    alt={carouselUnit.imageAlt}
                                    height="650"
                                    />
                                    <Carousel.Caption>
                                        <h3 
                                        className="carousel-title"
                                        >{carouselUnit.title}</h3>
                                        <p
                                        className="carousel-content"
                                        >{carouselUnit.content}</p>
                                        <button
                                        className="carousel-readmore"
                                        >Read More</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
        </>
    )
}

export default Home;
