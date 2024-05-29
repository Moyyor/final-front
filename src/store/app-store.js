import { create } from "zustand";
import { getJWT, getMe, removeJWT, setJWT } from "../api/api-utils";

export const useStore = create((set) => ({
	isAuth: false,
	user: null,
	token: null,
	login: (user, token) => {
		set({ isAuth: true, user: { ...user, id: user._id }, token: token });
		setJWT(token);
	},
	logout: () => {
		set({ isAuth: false, user: null, token: null });
		removeJWT();
	},
	checkAuth: async () => {
		const token = getJWT();
		if (token) {
			const me = await getMe(token);
			if (me) {
				set({ isAuth: true, user: { ...me, id: me._id }, token: token });
				setJWT(token);
			} else {
				set({ isAuth: false, user: null, token: null });
				removeJWT();
			}
		} else {
			set({ isAuth: false, user: null, token: null });
			removeJWT();
		}
	},
}));
