import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokePage = ({ selectedCategory, onReturnToChoice }) => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, [selectedCategory]);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blague/:categorie'${selectedCategory}`);
      const newJoke = response.data.type === 'twopart'
        ? `${response.data.setup} ${response.data.delivery}`
        : response.data.joke;
      setJoke(newJoke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="container joke-page">
      <div className="joke-container">
        <h2>Blague du jour ({selectedCategory})</h2>
        <p className="joke-text">{joke}</p>
        <button className="joke-button" onClick={onReturnToChoice}>
          &#8592; {/* Utilise l'entité HTML pour une flèche */}
        </button>
        <span className="button-spacing"></span> 
        <button className="joke-button" onClick={fetchJoke}>🎲</button>
      </div>
    </div>
  );
};

export default JokePage;
