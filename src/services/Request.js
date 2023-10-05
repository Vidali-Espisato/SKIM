// import jwtDecode from "jwt-decode";

const tokenName = "skimToken"
const urlOf = path => process.env.REACT_APP_BACKEND_API_HOST + path

const buildRequest = (path, payload, headers, method) => {
	let options;
	const token = localStorage.getItem(tokenName)
	const url = urlOf(path)

	headers['Content-Type'] = "application/json"
	if (!("Authorization" in headers) && token) headers['Authorization'] = `Bearer ${token}`

	if (method === "POST") {
		options = {
			method,
			body: JSON.stringify(payload),
			headers: headers
		};
	}

	return { url, options }
}


const fetchResponse = async (path, payload, headers, method) => {
	const { url, options } = buildRequest(path, payload, headers, method)
	const response = await fetch(url, options)
	const statusCode = response.status
	const jsonResponse = statusCode === 204 ? {} : await response.json()

	return { statusCode, jsonResponse }
}


const Request = async (path, payload = {}, headers = {}, method = "POST") => {
	let response = await fetchResponse(path, payload, headers, method)
	const { statusCode, jsonResponse } = response

	if ("info" in jsonResponse) return { statusCode: 202, jsonResponse: {"error": jsonResponse.info}}

	return response
}


export default Request;
