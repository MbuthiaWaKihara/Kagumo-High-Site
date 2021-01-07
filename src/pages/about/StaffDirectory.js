import React from 'react';
import CustomLogo from '../../images/custom-logo.png';

const StaffDirectory = () => {
    React.useEffect(() => {
        document.title = "KHS | Our Staff";

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
            <h1>Staff Directory Page</h1>
        </>
    )
}

export default StaffDirectory;
