import React, { useState } from 'react';
import axios from 'axios';

interface Dog {
  id: string;
  name: string;
  temperament: string;
  image: { url: string };
}

interface SearchDogFormProps {
  onResults: (dogs: Dog[]) => void;
}

const SearchDogForm: React.FC<SearchDogFormProps> = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<Dog[]>('https://api.thedogapi.com/v1/breeds/search', {
        params: { q: query },
        headers: { 'x-api-key': 'live_3GRn8gS1S54thBWrsAgSQCS3WJ5faNC4CIpv6xcmJFcSzV95dYdK9c2TDa8Akw6N' },
      });
      onResults(response.data);
    } catch (err) {
      setError('Algo salio mal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca por raza"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SearchDogForm;

