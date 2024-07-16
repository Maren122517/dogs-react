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
    <div>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>
            <h2>{dog.name}</h2>
            <p>{dog.temperament}</p>
            {dog.image && <img src={dog.image.url} alt={dog.name} width={200} />}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;

