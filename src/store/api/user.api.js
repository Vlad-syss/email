import { api } from "./api";

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		addUsers: builder.mutation({
			query: (user) => ({
				body: user,
				url: "/users",
				method: "POST",
			}),
			invalidatesTags: () => [
				{
					type: "Emailing",
				},
			],
		}),
		removeUsers: builder.mutation({
			query: (id) => ({
				url: `/users/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: () => [
				{
					type: "Emailing",
				},
			],
		}),
	}),
});

export const { useAddUsersMutation, useRemoveUsersMutation } = userApi;
