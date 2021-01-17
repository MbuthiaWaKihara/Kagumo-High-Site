import React from 'react';
import { carouselData } from '../utils/carousel-data';
import theme from '../styles/theme';
import { schoolEvents, schoolNews } from '../utils/app-data';

//bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import SchoolEvent from '../components/SchoolEvent';
import SchoolNews from '../components/SchoolNews';
import MissionAndVisionSwitch from '../components/MissionAndVisonSwitch';
import CustomContainer from '../components/styled/CustomContainer';

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
                    margin-bottom: 5%;
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
                }

                .carousel-content {
                    font-weight: bolder;
                }

                .body-title {
                    color: ${theme.mainTartiary};
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
                                        onClick={() => window.location.href = "https://github.com/MbuthiaWaKihara"}
                                        >Read More</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <CustomContainer>
                                <MissionAndVisionSwitch />
                            </CustomContainer>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} sm={12}>
                            <h3 className="body-title">Events</h3>
                            {schoolEvents.map(event => (
                                <SchoolEvent
                                event={event}
                                />
                            ))}
                            
                        </Col>
                        <Col lg={4} sm={12}>
                            <h3 className="body-title">News</h3>
                            {schoolNews.map(news => (
                                <SchoolNews
                                news={news}
                                />
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} sm={12}>
                        <a 
                            rel="noreferrer" 
                            href="https://github.com/MbuthiaWaKihara" 
                            target="_blank"
                            >See full school calender year {new Date().getFullYear()}</a>
                        </Col>
                    </Row>
                    
                </Container>
        </>
    )
}

export default Home;
