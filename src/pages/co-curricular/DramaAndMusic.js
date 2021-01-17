import React from 'react';
import CustomLogo from '../../images/custom-logo.png';
import content from '../../utils/content';
import Content from '../../components/layouts/Content';

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
            <Content {...content.dramaAndMusic} />
        </>
    )
}

export default DramaAndMusic;
