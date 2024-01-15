import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./root-reducers";
import { api } from "./api/api";

export const store = configureStore({
	reducer: rootReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});
