// src/pages/DogPage.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Dog {
  id: string;
  name: string;
  temperament: string;
  image: { url: string };
}

const DogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dog, setDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=30&breed_ids=beng&api_key=live_3GRn8gS1S54thBWrsAgSQCS3WJ5faNC4CIpv6xcmJFcSzV95dYdK9c2TDa8Akw6N`);

        setDog(response.data);
      } catch (err) {
        setError('Algo salio mal');
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>; // Mostrar el error para debug
  if (!dog) return <p>No dog found</p>;

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>{dog.temperament}</p>
      <img src={dog.image.url} alt={dog.name} />
    </div>
  );
};

export default DogPage;
