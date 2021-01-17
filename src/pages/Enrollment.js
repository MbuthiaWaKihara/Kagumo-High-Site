import React from 'react';
import theme from '../styles/theme';
import EnrollmentForm from '../components/EnrollmentForm';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Enrollment = () => {
    React.useEffect(() => {
        document.title = "KHS | Learn Here";
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3
                        style={{
                            color: theme.mainSecondary,
                            marginTop: '5%',
                            width: '100%',
                            textAlign: 'center',
                            fontWeight: 'bolder',
                        }}
                        >
                            Open House for Prospective Students Registration Form
                        </h3>
                    </Col>
                </Row>
                <EnrollmentForm />
            </Container>
        </>
    )
}

export default Enrollment;
