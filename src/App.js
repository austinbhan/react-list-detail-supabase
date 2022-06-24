import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { getCrops } from './services/fetch-utlis';
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CropList from './CropList';
import CropDetail from './CropDetail';

function App() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    async function fetch() {
      const cropsList = await getCrops(); // Add {from to} when adding pagination

      setCrops(cropsList);
    }
    fetch();
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <h1>This is the front page</h1>
            <Route exact path = '/'> 
              <CropList // Your List of Crops
                crops={crops}/>
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
