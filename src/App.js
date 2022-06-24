import React from 'react';

import './App.css';

import { BrowserRouter as Router,
// Add Switch when Ready
  Route,
} from 'react-router-dom';


import CropDetail from './CropDetail';
import CropPage from './CropPage';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* Need to Add Switch */}
          <h1>This is the front page</h1>
          <Route exact path = '/'> 
            <CropPage />
          </Route>
          <Route exact path ='/crops/:id'>
            <CropDetail  // Details go Here
            />
          </Route>
          {/* Need to Add Switch */}
        </div>
      </Router>
    </>
  );
}

export default App;
