import React from 'react';
import DogList from '../components/DogList';
import useDogs from '../hooks/useDogs';

const HomePage: React.FC = () => {
  const { dogs, loading, error } = useDogs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h1>Dog Breeds</h1>
      <DogList dogs={dogs} />
    </div>
  );
};

export default HomePage;
