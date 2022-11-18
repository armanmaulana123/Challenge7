import './App.css';
import { LandingPage } from './components';
import Login from './components/Login';
import Logout from './components/Logout';
import React, {useEffect} from 'react';
import {gapi} from 'gapi-script';

const clientId = "976670356776-c8tl101uq30deet2o0j0afoegvklj5dc.apps.googleusercontent.com"

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
    <div className="App">
      <Login/>
      <Logout/>
      <LandingPage/>
    </div>
  );
}

export default App;
