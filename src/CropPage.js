import { useState, useEffect } from 'react';
import React from 'react';
import { getCrops } from './services/fetch-utlis';
import CropList from './CropList';
import './App.css';

export default function CropPage() {
  const [crops, setCrops] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const lastPage = Math.floor(crops / perPage);

  useEffect(() => {
    async function fetch() {
      const cropsList = await getCrops();
      setCrops(cropsList);
    }
    fetch();
  }, []);

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const crops = await getCrops(from, to);

      setCrops(crops);
    }

    fetch();
  }, [page]);

  return (
    <>
      <div className="crop-card">
        <h2>Current Page: {page}</h2>
        <div className="button">
          <button disabled={page <= 0} onClick={() => setPage(page - 1)}>Previous</button>
          <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>Next</button>
        </div>
        <CropList
          crops={crops} />
        
      </div>
    </>
  );
}