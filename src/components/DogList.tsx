import React from 'react';
import { Link } from 'react-router-dom';

interface Dog {
  id: string;
  name: string;
  temperament: string;
  image: { url: string };
}

interface DogListProps {
  dogs: Dog[];
}

const DogList: React.FC<DogListProps> = ({ dogs }) => {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <div key={dog.id} className="dog-card">
          <Link to={`/dogs/${dog.id}`}>
            <h2>{dog.name}</h2>
            <p>{dog.temperament}</p>
            {dog.image && <img src={dog.image.url} alt={dog.name} />}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;


