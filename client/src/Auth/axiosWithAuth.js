import axios from "axios"

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token")

	return axios.create({
		baseURL: "https://secret-family-recipe-app.herokuapp.com",
		headers: {
			Authorization: token,
		},
	})
}
