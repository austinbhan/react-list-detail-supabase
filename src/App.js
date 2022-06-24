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
      <Router>
        <div className="App">
          <Switch>
            <Route exact path = '/'> 
              <CropPage />
            </Route>
            <Route exact path ='/crops/:id'>
              <CropDetail  // Details go Here
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
