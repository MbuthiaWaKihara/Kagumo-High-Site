import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Layout from './components/layouts/Layout';

//pages
import Home from './pages/Home';
import AlumniProfile from './pages/about/AlumniProfile';
import ClubsListing from './pages/co-curricular/ClubsListing';
import Contact from './pages/Contact';
import DramaAndMusic from './pages/co-curricular/DramaAndMusic';
import Enrollment from './pages/Enrollment';
import Football from './pages/co-curricular/Football';
import History from './pages/about/History';
import JoinUs from './pages/about/JoinUs';
import MissionAndVision from './pages/about/MissionAndVision';
import Rugby from './pages/co-curricular/Rugby';
import SchoolGovernance from './pages/about/SchoolGovernance';
import StaffDirectory from './pages/about/StaffDirectory';
import TableTennis from './pages/co-curricular/TableTennis';
import Volleyball from './pages/co-curricular/Volleyball';

function App() {
  return (
    <>
      <Router>
        <Layout>
                <Switch>
                  <Route path="/" exact render={props => <Home {...props}/>}/>
                  <Route path="/about/alumni-profile" exact render={props => <AlumniProfile {...props}/>}/>
                  <Route path="/co-curricular/clubs-listing" exact render={props => <ClubsListing {...props}/>}/>
                  <Route path="/contact" exact render={props => <Contact {...props}/>}/>
                  <Route path="/co-curricular/drama-and-music" exact render={props => <DramaAndMusic {...props}/>}/>
                  <Route path="/enrollment" exact render={props => <Enrollment {...props}/>}/>
                  <Route path="/co-curricular/football" exact render={props => <Football {...props}/>}/>
                  <Route path="/about/history" exact render={props => <History {...props}/>}/>
                  <Route path="/about/join-us" exact render={props => <JoinUs {...props}/>}/>
                  <Route path="/about/mission-and-vision" exact render={props => <MissionAndVision {...props}/>}/>
                  <Route path="/co-curricular/rugby" exact render={props => <Rugby {...props}/>}/>
                  <Route path="/about/school-governance" exact render={props => <SchoolGovernance {...props}/>}/>
                  <Route path="/about/staff-directory" exact render={props => <StaffDirectory {...props}/>}/>
                  <Route path="/co-curricular/table-tennis" exact render={props => <TableTennis {...props}/>}/>
                  <Route path="/co-curricular/volleyball" exact render={props => <Volleyball {...props}/>}/>
                </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
