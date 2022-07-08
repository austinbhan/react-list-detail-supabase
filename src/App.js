import React from 'react';

import './App.css';

import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import CropDetail from './CropDetail';
import CropPage from './CropPage';

function App() {
  return (
    <>
      <div className="title">
        <h1 >Stardew Valley Crop Mods</h1>
      </div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = '/'> 
              <CropPage />
            </Route>
            <Route exact path ='/crops/:id'>
              <CropDetail  // Details go Here
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
