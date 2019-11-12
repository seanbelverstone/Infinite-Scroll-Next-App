import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/index";
import Passages from "./pages/passages";
import Problems from "./pages/problems";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { 
	GET_PASSAGES,
	GET_PROBLEMS,
	HANDLE_SCROLL,
	RENDER_PASSAGES,
	RENDER_PROBLEMS
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

	case GET_PROBLEMS:

	case HANDLE_SCROLL:

	case RENDER_PASSAGES:

	case RENDER_PROBLEMS:


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
