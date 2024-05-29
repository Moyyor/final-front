import { useState, useEffect } from "react";
import { getGamesByCategory, isResponseOk } from "./api-utils";

export const useGetDataByCategory = (category) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async () => {
			const data = await getGamesByCategory(category);
			isResponseOk(data) ? setData(data) : setData([]);
		})();
	}, []);
	return data;
};
