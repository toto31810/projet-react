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
	const category = categories.indexOf(categories.find(c => req.query.category === c));
	res.json(jokes.filter(j => j.category === category).slice(0, 1));
});

module.exports = router;
