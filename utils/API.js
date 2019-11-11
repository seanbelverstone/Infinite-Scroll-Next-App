import axios from "axios";

export default {

	getPassages: (passagePage) => {
		return axios.get(`http://18.237.242.89/api/passages?page=${passagePage}`)
	},

	getProblems: (problemsPage) => {
		return axios.get(`http://18.237.242.89/api/problems?page=${problemsPage}`)
	}

};