import React from "react";
import API from "./utils/API";
import { createStore } from "redux";
import { 
	GET_PASSAGES,
	GET_PROBLEMS,
	HANDLE_SCROLL,
	INCREMENT_PAGE
} from "./actions";

const initialState = {
	passageResults: [],
	problemResults: [],
	page: 0,
	maxPages: 0,
	scrolling: false
};

const reducer = (state = initialState, action) => {
	console.log(state);
	switch(action.type) {

	case GET_PASSAGES: 
		API.getPassages(page).then(results => {
			const oldPassages = state.passageResults;
			console.log(results.data.data.passages);
			if (oldPassages.length !== 0) {
				return {
					...state,
					passageResults: [...oldPassages, ...results.data.data.passages],
					scrolling: false
				}
			} else {
				return {
					...state,
					passageResults: results.data.data.passages
				}
			}
		});

	case GET_PROBLEMS:
		API.getProblems(page).then(results => {
			const oldProblems = state.problemResults;
			console.log(results.data.data.problems);
			if (oldPassages.length !== 0) {
				return {
					...state,
					problemResults: [...oldProblems, ...results.data.data.problems],
					scrolling: false
				}
			} else {
				return {
					...state,
					problemResults: results.data.data.problems
				}
			}
		});

	case HANDLE_SCROLL:
		// These returns prevent the function from continuing if either is true
		if (state.scrolling) return
		if (state.page >= state.maxPages) return

		// Grabbing the last element in the unordered list
		const lastCard = document.querySelector("ul.cards > li:last-child");

		// calculating offset, to start loading before the user reaches the bottom of the page
		const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
		const pageOffset = window.pageYOffset + window.innerHeight;
		const bottomOffset = 20;
		if (pageOffset > lastCardOffset - bottomOffset) {
			return {
				...state,
				scrolling: true,
			}
		}


	case INCREMENT_PAGE:
		const newPage = state.page +1
		return {
			...state,
			page: newPage
		}

	default:
		return state;
	}
};

if (typeof window === "undefined") {
	global.window = {}
}

if (process.browser){}

const store = createStore(
	reducer,
	typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;