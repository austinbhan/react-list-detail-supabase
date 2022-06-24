import { useState, useEffect } from 'react';
import React from 'react';
import { getCrops } from './services/fetch-utlis';
import CropList from './CropList';

export default function CropPage() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    async function fetch() {
      const cropsList = await getCrops();

      setCrops(cropsList);
    }
    fetch();
  }, []);

  return (
    <>
      <CropList
        crops={crops} />
    </>
  );
}