import React, { useState } from 'react';
import ChoicePage from './ChoicePage';
import JokePage from './JokePage';
import './styles.css';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleSelectCategory = (category) => {
      setSelectedCategory(category);
    };
  
    const handleReturnToChoice = () => {
      setSelectedCategory(null);
    };
  
    return (
      <div className="App">
        {!selectedCategory ? (
          <ChoicePage onSelectCategory={handleSelectCategory} />
        ) : (
          <JokePage selectedCategory={selectedCategory} onReturnToChoice={handleReturnToChoice} />
        )}
      </div>
    );
  }


export default App;

