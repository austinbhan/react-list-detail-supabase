import { Link } from 'react-router-dom';
import './App.css';


export default function Crop({ name, classification, description, icon, id }) {
  return (
    <>
      
      <div className="crop">
        <Link to={`/crops/${id}`}>
          <img className="icon" src={icon}/>
        </Link>
        <h3>{name}</h3>
        <p>{classification}</p>
        <p>{description}</p>
      
      </div>
      
    </>
  );
}

// Make Link
