import React from 'react';
import CustomLogo from '../../images/custom-logo.png';
import Content from '../../components/layouts/Content';
import content from '../../utils/content';

const Football = () => {
    React.useEffect(() => {
        document.title = "KHS | Soccer";

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
           <Content {...content.football} />
        </>
    )
}

export default Football;
