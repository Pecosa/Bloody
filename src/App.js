import React, { Component } from 'react';
import './App.css';
import Nave from './Nav.js';
import SelectContainer from './SelectContainer.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import listaAlertas from './listaAlertas.js';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Nave/>
        <Switch>
          <Route exact path='/' component={SelectContainer} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/listaAlertas' component={listaAlertas} />

        </Switch>
      </div>
    );
  }
}

export default App;
