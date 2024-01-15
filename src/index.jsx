import React, {
	useState
} from "react";
import { createRoot } from "react-dom/client";

import Choice from "./pages/Choice.jsx";
import Joke from "./pages/Joke.jsx";
import "./style/styles.css";

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
				<Choice onSelectCategory={handleSelectCategory} />
			) : (
					<Joke selectedCategory={selectedCategory} onReturnToChoice={handleReturnToChoice} />
				)}
		</div>
	);
};

const rootNode = document.getElementById("root");
createRoot(rootNode).render(
	<>
		<App />
	</>
);
