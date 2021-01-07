import React from 'react';
import CustomLogo from '../../images/custom-logo.png';

const DramaAndMusic = () => {
    React.useEffect(() => {
        document.title = "KHS | Entertainment";

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
            <h1>Drama And Music Page</h1>
        </>
    )
}

export default DramaAndMusic;
