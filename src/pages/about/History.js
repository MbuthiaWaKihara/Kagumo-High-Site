import React from 'react';
import CustomLogo from '../../images/custom-logo.png';
import content from '../../utils/content';

//components 
import Content from '../../components/layouts/Content';

const History = () => {
    React.useEffect(() => {
        document.title = "KHS | Our History";

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
           <Content {...content.history} />
        </>
    )
}

export default History;
