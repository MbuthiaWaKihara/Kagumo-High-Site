import React from 'react';

//components
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <MainNavigation/>
            {children} 
            <Footer/>
        </>
    )
}

export default Layout;
