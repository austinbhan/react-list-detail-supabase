// import { Link } from 'react-router-dom';
import './App.css';


export default function Crop({ name, classification, description, icon }) {
  return (
    <div className="crop">
      <img className="icon" src={icon}/>
      <h3>{name}</h3>
      <p>{classification}</p>
      <p>{description}</p>
      
    </div>
  );
}

// Make Link
