const express = require("express");
const router = express.Router();

const categories = [
	"juif", // index = 0
];

const jokes = [
	{
		category: 0, // index de la catégorie
		content: "Comment appelle-t-on un juif qui a un rhume ? Un Juif malade.",
	}
];

router.get("/categories", (req, res) => {
	res.json(categories);
});

router.get("/joke", (req, res) => {
	if(!req.query.category) {
		return res.status(400).json({ error: "Missing category" });
	}
	const category = categories.indexOf(categories.find(c => req.query.category === c));
	const jokesOfCategory = jokes.filter(j => j.category === category);
	const randomJoke = jokesOfCategory[Math.floor(Math.random() * jokesOfCategory.length)];
	res.json({ joke: randomJoke });
});

module.exports = router;
