// import { Link } from 'react-router-dom';
// import './App.css'


export default function Crop({ name, classification, description }) {
  return (
    <div className="crop">
      <h3>{name}</h3>
      <p>{classification}</p>
      <p>{description}</p>
    </div>
  );
}

// Make Link
// Add Icon
// Add CSS