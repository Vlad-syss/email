import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://659593e604335332df82fa93.mockapi.io/api";

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["Emailing"],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		watchUsers: builder.query({
			query: () => "/users",
			providesTags: () => [
				{
					type: "Emailing",
				},
			],
		}),
		addColors: builder.query({
			query: () => "/todos",
			providesTags: () => [
				{
					type: "Emailing",
				},
			],
		}),
	}),
});

export const { useWatchUsersQuery, useAddColorsQuery } = api;
