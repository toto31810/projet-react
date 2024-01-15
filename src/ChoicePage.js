import React from 'react';
import './styles.css';

const ChoicePage = ({ onSelectCategory }) => {
  const categories = ['Sexiste', 'Beauf', 'Arabe', 'Chinois', 'Juif', 'Pédophile', 'Normal', 'Animaux']; 

  return (
    <div className="container choice-page">
      <h2>Choisissez une catégorie de blagues :</h2>
      <ul className="choice-list">
        {categories.map((category, index) => (
          <li key={index} className="choice-item">
            <button className="choice-button" onClick={() => onSelectCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  )};

export default ChoicePage;
