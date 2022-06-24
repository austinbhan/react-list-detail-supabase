import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleCrop } from './services/fetch-utlis';

export default function CropDetail() {
  const [crop, setCrop] = useState({});
  const params = useParams();

  useEffect(() => {
    async function doFetch() {
      const data = await getSingleCrop(params.id);
      setCrop(data);
    }
    doFetch();
  }, [params.id]);

  return (
    <>
      <Link to='/'>Home</Link>
      <div className="crop-detail">
        <img className="icon" src={crop.icon}/>
        <h1>Name: {crop.name}</h1>
        <h3>Description: {crop.description}</h3>
        <p>Classification: {crop.classification}</p>
        <p>Days to Harvest: {crop.growth_time}</p>        
        <p>When to harvest them: {crop.season}</p>
      </div>
    </>
  );
}