import { baseurls } from "./BaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseurls }),
  // tagTypes: ["Course", "Abouts"],
  endpoints: (builder) => ({
    //Create Course State

    registerUser: builder.mutation({
      query: (query) => ({
        url: "api/admin-register",
        method: "POST",

        body: query,
      }),
      // invalidatesTags: ["Course"],
    }),

    loginUser: builder.mutation({
      query: (query) => ({
        url: "api/login",
        method: "POST",
        body: query,
      }),
    }),
  }),
});

export const { useRegisterUserMutation,useLoginUserMutation } = UserApi;
// export const {useLoginUserMutation } = UserApi;
