import React from 'react';
import CustomLogo from '../../images/custom-logo.png';

//bootstrap
import Container from 'react-bootstrap/Container';

import EnrollmentForm from '../../components/EnrollmentForm';

const JoinUs = () => {
    React.useEffect(() => {
        document.title = "KHS | Join Us";

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
            <EnrollmentForm />
            </Container>

        </>
    )
}

export default JoinUs;
