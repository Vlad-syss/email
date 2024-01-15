import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
	file: {
		name: "",
		size: "",
		icon: null,
	},
};

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		countWords: (state, { payload }) => {
			const characterCount = payload.replace(/\s/g, "").length;

			state.count = characterCount;
		},
		uploadFile: (state, { payload }) => {
			state.file = {
				name: payload.name,
				size: payload.size,
				icon: payload.icon ? payload.icon[1] : null,
			};
		},
	},
});

export const { countWords, uploadFile } = formSlice.actions;
