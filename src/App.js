import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './Components/pages/AboutUs';
import Home from './Components/pages/HomePage/Home';
import Footer from './Components/Footer'; 
import Built from './Components/pages/Built';
import Courses from './Components/pages/Courses';
import Community from './Components/pages/Community';
import Findnext from './Components/FindNextProject/Findnext';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch><Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/built' component={Built}/>
        <Route path='/courses' component={Courses}/>
        <Route path='/community' component = {Community}/>
        <Route path='/production' component = {Findnext}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
