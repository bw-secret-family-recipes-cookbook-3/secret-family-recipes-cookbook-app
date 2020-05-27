import axios from "axios"

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token")

	return axios.create({
		baseURL: "https://bw-secret-recipe.herokuapp.com/",
		headers: {
			Authorization: token,
		},
	})
}
