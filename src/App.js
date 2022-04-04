import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About_Us from './components/pages/About_Us'
import Blogs from './components/pages/Blogs';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={About_Us} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
