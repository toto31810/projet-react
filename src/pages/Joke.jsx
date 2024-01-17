import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokePage = ({ selectedCategory, onReturnToChoice }) => {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios.get(`/api/joke?category=${selectedCategory}`).then(response => {
			if(response.status !== 200) return;
      console.log(response.data)
			setJoke(response.data.joke);
		})
  };

	useEffect(() => {
		getJoke();
	}, []);

  useEffect(() => {
		console.log(joke);
	}, [joke]);

  return (
    <div className="container joke-page">
      <div className="joke-container">
        <h2>Blague du jour ({selectedCategory})</h2>
        <p className="joke-text">{joke.content}</p>
        <button type="button" className="joke-button" onClick={onReturnToChoice}>
          &#8592; {/* Utilise l'entité HTML pour une flèche */}
        </button>
        <span className="button-spacing"></span> 
        <button onClick={getJoke} type="button" className="joke-button">🎲</button>
      </div>
    </div>
  );
};

export default JokePage;
