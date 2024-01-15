import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokePage = ({ selectedCategory, onReturnToChoice }) => {
  const [joke, setJoke] = useState('');

	useEffect(() => {
		axios.get(`/api/joke?category=${selectedCategory}`).then(response => {
			if(response.status !== 200) return;
			setJoke(response.data.content);
		})
	}, []);

  return (
    <div className="container joke-page">
      <div className="joke-container">
        <h2>Blague du jour ({selectedCategory})</h2>
        <p className="joke-text">{joke}</p>
        <button type="button" className="joke-button" onClick={onReturnToChoice}>
          &#8592; {/* Utilise l'entité HTML pour une flèche */}
        </button>
        <span className="button-spacing"></span> 
        <button type="button" className="joke-button">🎲</button>
      </div>
    </div>
  );
};

export default JokePage;
