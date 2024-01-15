import React, {
	useState,
	useEffect
} from 'react';

import axios from 'axios'

export default ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
		axios.get("/api/categories").then((response) => {
			setCategories(response.data);
		});
  }, []);

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
	);
};
