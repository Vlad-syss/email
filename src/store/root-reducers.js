import { combineReducers } from "@reduxjs/toolkit";
import { formSlice } from "./formSlice/form.slice";
import { api } from "./api/api";

export const rootReducers = combineReducers({
	form: formSlice.reducer,
	[api.reducerPath]: api.reducer,
});
