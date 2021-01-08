import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation } from 'react-router-dom';
// import theme from '../../styles/theme';

//photos
import Warui from '../../images/warui.jpg';
import History from '../../images/history.jpg';
import MissionAndVision from '../../images/mission-and-vision.png';
import SchoolGovernance from '../../images/school-governance.png';
import StaffDirectory from '../../images/staff-directory.jpg';
import AlumniProfile from '../../images/alumni-profile.png';
import JoinUs from '../../images/join-us.jpg';
import Enrollment from '../../images/enroll.jpg';
import DramaAndMusic from '../../images/festival.jpg';
import Rugby from '../../images/rugby.jpg';
import Football from '../../images/football.jpg';
import Volleyball from '../../images/volleyball.jpg';
import TableTennis from '../../images/table-tennis.jpg';
import ClubsListing from '../../images/club-listing.jpg';

//components
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import LayoutImage from '../LayoutImage';

const Layout = ({children}) => {
    const location = useLocation();

    const getImageSource = () => {
        switch(location.pathname) {
            case "/about/history":
                return History;
            case "/about/mission-and-vision":
                return MissionAndVision;
            case "/about/school-governance":
                return SchoolGovernance;
            case "/about/staff-directory":
                return StaffDirectory;
            case "/about/alumni-profile":
                return AlumniProfile;
            case "/about/join-us":
                return JoinUs;
            case "/enrollment":
                return Enrollment;
            case "/co-curricular/drama-and-music":
                return DramaAndMusic;
            case "/co-curricular/rugby":
                return Rugby;
            case "/co-curricular/football":
                return Football;
            case "/co-curricular/volleyball":
                return Volleyball;
            case "/co-curricular/table-tennis":
                return TableTennis;
            case "/co-curricular/clubs-listing":
                return ClubsListing;
            default:
                return Warui;
        }
    }
    return (
        <>
            <MainNavigation/>
            {
                location.pathname !== "/" && location.pathname !== "/contact" &&
                <LayoutImage
                imageSource={getImageSource()}
                />
            }
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
