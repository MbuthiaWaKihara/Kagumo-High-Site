import React from 'react';
import CustomLogo from '../../images/custom-logo.png';

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
            <h1>Alumni Profile Page</h1>
        </>
    )
}

export default AlumniProfile;
