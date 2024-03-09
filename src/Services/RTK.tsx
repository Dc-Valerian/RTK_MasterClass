import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RtkSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65ec46d00ddee626c9afe0b9.mockapi.io/api/vi/",
  }),
  reducerPath: "userapi",
  endpoints: (builder) => ({
    getAllUsers: builder.query({ query: () => "/users" }),
  }),
});

export const { useGetAllUsersQuery } = RtkSlice;
