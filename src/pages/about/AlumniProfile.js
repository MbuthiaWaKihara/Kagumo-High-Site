import React from 'react';
import CustomLogo from '../../images/custom-logo.png';
import { alumniProfiles } from '../../utils/app-data';

//components
import Alumni from '../../components/Alumni';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AlumniProfile = () => {
    React.useEffect(() => {
        document.title = "KHS | Our Alumni";


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
            <Container>
                <Row>
                    <Col>
                    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                    >
                        {alumniProfiles.map(profile => (
                            <Alumni profile={profile} />
                        ))}
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AlumniProfile;
