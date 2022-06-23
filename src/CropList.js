import Crop from './Crop';

export default function CropList({ crops }) {
  return (
    <div className="crops">
      {
        crops.map((crop, i) => {
          return <Crop
            {...crop}
            key={crop.name + i} />;
        })
      }
    </div>
  );
}