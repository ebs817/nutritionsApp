import * as actionTypes from "./actions";
import { MealsEnum } from "../constants";

const initialState = {
	meal: MealsEnum.Breakfast,
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
				case MealsEnum.Breakfast:
					return {
						...state,
						Breakfast: [
							...state.Breakfast,
							action.data.ingridientInfo,
						],
					};
				case MealsEnum.Lunch:
					return {
						...state,
						Lunch: [...state.Lunch, action.data.ingridientInfo],
					};
				case MealsEnum.Dinner:
					return {
						...state,
						Dinner: [...state.Dinner, action.data.ingridientInfo],
					};
				default:
					return state;
			}
		case actionTypes.REMOVE_INGREDIENT:
			switch (action.data.meal) {
				case MealsEnum.Breakfast:
					return {
						...state,
						Breakfast: [
							...state.Breakfast.filter(
								(ing) => ing.id == action.data.id
							),
						],
					};
				case MealsEnum.Lunch:
					return {
						...state,
						Lunch: [
							...state.Lunch.filter(
								(ing) => ing.id == action.data.id
							),
						],
					};
				case MealsEnum.Dinner:
					return {
						...state,
						Dinner: [
							...state.Dinner.filter(
								(ing) => ing.id == action.data.id
							),
						],
					};
				default:
					return state;
			}
		default:
			return state;
	}
};

export default reducer;
