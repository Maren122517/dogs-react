// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './theme/GlobalStyle';
import DogList from './components/DogList';
import DogPage from './pages/DogPage';
import SearchDogForm from './components/searchDogForm';
import useDogs from './hooks/useDogs';

const App: React.FC = () => {
  const { dogs, loading, error } = useDogs();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results: any) => {
    setSearchResults(results);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchDogForm onResults={handleSearchResults} />
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <DogList dogs={searchResults.length > 0 ? searchResults : dogs} />
              </>
            }
          />
          <Route path="/dogs/:id" element={<DogPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;


