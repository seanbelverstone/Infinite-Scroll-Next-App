export const GET_PASSAGES = "GET_PASSAGES";
export const GET_PROBLEMS = "GET_PROBLEMS";
export const HANDLE_SCROLL = "HANDLE_SCROLL";
// export const RENDER_PASSAGES = "RENDER_PASSAGES";
// export const RENDER_PROBLEMS = "RENDER_PROBLEMS";
export const INCREMENT_PAGE = "INCREMENT_PAGE";


export function getPassages(page) {
	console.log(page);
	return {
		type: GET_PASSAGES,
		page
	};
}

export function getProblems(page) {
	console.log(page)
	return {
		type: GET_PROBLEMS,
		page
	};
}

export function handleScroll(event, scrolling, page) {
	return {
		type: HANDLE_SCROLL,
		event,
		scrolling,
		page
	}
}

// export function renderPassages(passageResults) {
// 	console.log(passageResults);
// 	return {
// 		type: RENDER_PASSAGES,
// 		passageResults
// 	}
// }

// export function renderProblems(problemResults) {
// 	console.log(problemResults);
// 	return {
// 		type: RENDER_PROBLEMS,
// 		problemResults
// 	}
// }

export function incrementPage(page) {
	console.log(page);
	return {
		type: INCREMENT_PAGE,
		page
	}
}

