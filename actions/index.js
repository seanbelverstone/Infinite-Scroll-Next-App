export const GET_PASSAGES = "GET_PASSAGES";
export const GET_PROBLEMS = "GET_PROBLEMS";
export const HANDLE_SCROLL = "HANDLE_SCROLL";
export const RENDER_PASSAGES = "RENDER_PASSAGES";
export const RENDER_PROBLEMS = "RENDER_PROBLEMS";


export function getPassages() {
	return {
		type: GET_PASSAGES,
	};
}

export function getProblems() {
	return {
		type: GET_PROBLEMS
	};
}

export function handleScroll() {
	return {
		type: HANDLE_SCROLL
	}
}

export function renderPassages() {
	return {
		type: RENDER_PASSAGES
	}
}

export function renderProblems() {
	return {
		type: RENDER_PROBLEMS
	}
}