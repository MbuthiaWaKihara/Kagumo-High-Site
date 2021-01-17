import React from 'react';
import CustomLogo from '../../images/custom-logo.png';
import MissionAndVisionSwitch from '../../components/MissionAndVisonSwitch';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MissionAndVision = () => {
    React.useEffect(() => {
        document.title = "KHS | Mantra";

        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = CustomLogo;
    }, []);

    return (
        <>
            <style type="text/css">{`
                .container {
                    padding-top: 50px;
                }
            `}</style>
            <Container>
                <Row>
                    <Col>
                    <MissionAndVisionSwitch />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MissionAndVision;
