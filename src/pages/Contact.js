import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    React.useEffect(() => {
        document.title = "KHS | Contact Us";
    }, []);

    return (
        <>
            <ContactForm/>
        </>
    )
}

export default Contact;
