import { endPoints } from "./config";

export const isResponseOk = (response) => {
	return !(response instanceof Error);
};

export const getData = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("Ошибка получения данных");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		return error;
	}
};

export const getGameById = async (id) => {
	const data = await getData(`${endPoints.games}/${id}`);
	return isResponseOk(data) ? normalizeGame(data) : data;
};

export const getGamesByCategory = async (category) => {
	const data = await getData(`${endPoints.games}?categories.name=${category}`);
	return isResponseOk(data) ? data.map((item) => normalizeGame(item)) : data;
};

const normalizeGame = (game) => {
	return game
		? {
				...game,
				author: game.developer,
				heading: game.title,
				category: game.categoies,
				src: game.image,
				id: game._id,
				users: game.users.map((item) => {
					return {
						...item,
						id: item._id,
					};
				}),
			}
		: null;
};

export const authorize = async (authData) => {
	try {
		const response = await fetch(endPoints.auth, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(authData),
		});
		if (!response.ok) {
			throw new Error("Ошибка отправки данных :/");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

export const getMe = async (jwt) => {
	try {
		const response = await fetch(endPoints.me, {
			method: "GET",
			headers: { Authorization: `Bearer ${jwt}` },
		});
		if (!response.ok) {
			throw new Error("Ошибка получения данных!");
		}
		return await response.json();
	} catch (error) {
		return error;
	}
};

export const setJWT = (jwt) => {
	localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
	return localStorage.getItem("jwt");
};

export const removeJWT = () => {
	localStorage.removeItem("jwt");
};

export const checkIfUserVoted = (users, user) => {
	return !!users.find((elem) => elem.id == user.id);
};

export const vote = async (gameID, jwt, usersArray, data) => {
	try {
		console.log(gameID, jwt, usersArray, data);
		const res = await fetch(`${endPoints.games}/${gameID}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwt}`,
			},
			body: JSON.stringify({ users: usersArray, ...data }),
		});
		if (!res.ok || !gameID || !jwt || !usersArray) {
			throw new Error("Ошибка голосования");
		}
		return await res.json();
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const register = async (regData) => {
	try {
		const response = await fetch(endPoints.reg, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(regData),
		});
		return await response.json();
	} catch (error) {
		return error;
	}
};
