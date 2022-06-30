import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './Components/pages/AboutUs';
import Home from './Components/pages/HomePage/Home';
import Footer from './Components/Footer'; 
import Built from './Components/pages/Built';
import Courses from './Components/pages/LearnPage/Learn';
import Community from './Components/pages/Community-page/Community';
import Findnext from './Components/FindNextProject/Findnext';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Chatbotcomponent from "./chatbotcomponents/chatbotcomponent/Chatbotcomponent"


function App() {
  return (
    <>
    <ParallaxProvider>
    <ScrollToTop/>
      <Navbar />
      <Switch><Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/built' component={Built}/>
        <Route path='/learn' component={Courses}/>
        <Route path='/community' component = {Community}/>
        <Route path='/production' component = {Findnext}/>
      </Switch>
      <Chatbotcomponent/>
      <Footer />
    </ParallaxProvider>
    </>
  );
}

export default App;
