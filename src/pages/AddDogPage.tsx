import React, { useState } from 'react';

const AddDogPage: React.FC = () => {
  const [name, setName] = useState('');
  const [temperament, setTemperament] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dog added:', { name, temperament });
  };

  return (
    <div>
      <h1>Add a New Dog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Temperament</label>
          <input type="text" value={temperament} onChange={(e) => setTemperament(e.target.value)} />
        </div>
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
};

export default AddDogPage;
