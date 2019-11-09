import axios from "axios";

export default {

	getPassages: () => {
		return axios.get("http://18.237.242.89/api/passages")
	},

	getProblems: () => {
		return axios.get("http://18.237.242.89/api/problems")
	}

};