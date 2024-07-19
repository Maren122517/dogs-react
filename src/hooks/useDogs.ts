// src/hooks/useDogs.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Dog {
  id: string;
  name: string;
  temperament: string;
  image: { url: string };
}

const useDogs = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get<Dog[]>('https://api.thedogapi.com/v1/breeds?limit=30', {
          headers: { 'x-api-key': 'live_3GRn8gS1S54thBWrsAgSQCS3WJ5faNC4CIpv6xcmJFcSzV95dYdK9c2TDa8Akw6N' }
        });
        setDogs(response.data);
      } catch (err) {
        setError('Algo salio mal');
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  return { dogs, loading, error };
};

export default useDogs;
