import axios from "axios";

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const searchIngridient = axios.create({
	// baseURL: "https://api.edamam.com/api/food-database/v2/parser",
	baseURL: "https://api.spoonacular.com/food/ingredients/search",
});

const nutritionInfo = axios.create({
	// baseURL: "https://api.edamam.com/api/food-database/v2/parser",
	baseURL: "https://api.spoonacular.com/food/ingredients",
});

export default { searchIngridient, nutritionInfo };
