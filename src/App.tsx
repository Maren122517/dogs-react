import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DogList from './components/DogList';
import DogPage from './pages/DogPage';
import useDogs from './hooks/useDogs';

const App: React.FC = () => {
  const { dogs, loading, error } = useDogs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:id" element={<DogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
