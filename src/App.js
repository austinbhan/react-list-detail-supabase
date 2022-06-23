import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { getCrops } from './services/fetch-utlis';

import CropList from './CropList';

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
    <div className="App">
      <h1>This is the front page</h1>
      < CropList 
        crops={crops}/>
    </div>
  );
}

export default App;
