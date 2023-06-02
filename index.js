const Minuscule = require("minuscule");

function Slugify(sentence) {
	return Minuscule(sentence)
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

module.exports = Slugify;
