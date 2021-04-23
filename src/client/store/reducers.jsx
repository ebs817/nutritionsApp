import * as actionTypes from "./actions";

const initialState = {
	meal: "Breakfast",
	Breakfast: [],
	Lunch: [],
	Dinner: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_MEAL:
			return {
				...state,
				meal: action.data,
			};
		case actionTypes.ADD_INGREDIENT:
			switch (action.data.meal) {
				case 0:
					return {
						...state,
						Breakfast: state.Breakfast.push(
							action.data.ingridientInfo
						),
					};
				case 1:
					return {
						...state,
						Lunch: state.Lunch.push(action.data.ingridientInfo),
					};
				case 2:
					return {
						...state,
						Dinner: state.Dinner.push(action.data.ingridientInfo),
					};
				default:
					return state;
			}
		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				Breakfast: state.Breakfast.filter(
					(ing) => ing.id != action.data.id
				),
			};
		default:
			return state;
	}
};

export default reducer;
