import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/index";
import Passages from "./pages/passages";
import Problems from "./pages/problems";
import { createStore } from "redux";
import { Provider } from "react-redux";
import API from "./utils/API";
import { 
	GET_PASSAGES,
	GET_PROBLEMS,
	HANDLE_SCROLL,
	RENDER_PASSAGES,
	RENDER_PROBLEMS,
	INCREMENT_PAGE
} from "./actions";

const initialState = {
	passageResults: [],
	problemResults: [],
	page: 0,
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

	case HANDLE_SCROLL:

	// case RENDER_PASSAGES:

	// case RENDER_PROBLEMS:

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

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>  
		<Home />
		<Passages />
		<Problems />
	</Provider>,    
	document.getElementById("root"));
