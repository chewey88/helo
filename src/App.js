import React from 'react';
import Nav from './Components/Nav'
import routes from './routes'

import './App.css';

function App(props) {
  return (
    <div className="App">
      
        {props.isLoggedIn ? <Nav /> : null}
        {routes}
      
    </div>
  );
}

export default App;
