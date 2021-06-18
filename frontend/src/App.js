
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ControlledCarousel from './components/ControlledCarousel';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Form from './components/login/FROM.js'
import Panel from './components/admin panel/panel.js'
import Main from './components/Main';
import Footer from './components/footer';
import MINIFROM from './components/login/MINIFROM';



function App() {
  <React.Fragment>
    <Router>
      <Route path='/Form' component={Form} />
      <Route path='/MINIFORM' component={MINIFROM} />
      <Route path='/Panel' component={Panel} />
      <Route path='/PrimarySearchAppBar' component={PrimarySearchAppBar} />
      <Route path='/ControlledCarousel' component={ControlledCarousel} />
      <Route path='/Main' component={Main} />
      <Route path='/Footer' component={Footer} />
    </Router>
  </React.Fragment >
}

export default App;
