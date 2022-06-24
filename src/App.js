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
