// src/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  .dog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em;
  }

  .dog-card {
    flex: 0 1 calc(25% - 1em);
    box-sizing: border-box;
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    background-color: #000;
    transition: transform 0.2s;
  }

  .dog-card:hover {
    transform: scale(1.05);
  }

  .dog-card img {
    max-width: 100%;
    border-radius: 8px;
  }

  .dog-card h2 {
    text-decoration: none;
    font-size: 1.2em;
    margin: 0.5em 0;
  }

  .dog-card p {
    text-decoration: none;
    font-size: 1em;
    color: #666;
  }

  @media (max-width: 768px) {
    .dog-card {
      flex: 0 1 calc(50% - 1em);
    }
  }

  @media (max-width: 480px) {
    .dog-card {
      flex: 0 1 100%;
    }
  }

  form {
    margin-bottom: 2em;
    text-align: center;
  }

  input {
    padding: 0.5em;
    margin-right: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:disabled {
    background-color: #ccc;
  }

  button:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

