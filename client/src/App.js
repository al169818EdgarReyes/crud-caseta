import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register2 from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import Alta from './components/pages/Alta';
import ValeHerramienta from './components/pages/ValeHerramienta';


import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Navbar from './components/layout/Navbar';

import HerramientaState from './context/herramientas/HerramientasState';

const App = () => {
  return (
    <AuthState>
    <ContactState>
    <AlertState>
    <HerramientaState>
      <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Alerts />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/inicioSesion' component={SignIn} />
            <Route exact path='/registrar' component={Register} />
            <Route exact path='/alta' component={Alta} />
            <Route exact path='/valeherramienta' component={ValeHerramienta} />
            <Route exact path='/register' component={Register2} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Fragment>
      </Router>
    </HerramientaState>
    </AlertState> 
    </ContactState>
    </AuthState>
  );
}

export default App;
