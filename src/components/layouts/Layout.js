import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
// import theme from '../../styles/theme';

//components
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <MainNavigation/>
            {children} 
            <Footer/>
            <ScrollToTop 
            smooth
            color="blue"
            />
        </>
    )
}

export default Layout;
