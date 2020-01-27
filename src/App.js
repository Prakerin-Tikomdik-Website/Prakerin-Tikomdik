import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Add from './Addvideo.js';
import Video from './Listvideo.js';
import Profil from './Profil.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:'data'
    }
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/listvideo"><Video/></Route>
          <Route path="/profile"><Profil/></Route>
          <Route path="/addvideo"><Add/></Route>
          <Route path="/logout"></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
