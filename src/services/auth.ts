import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import User from "../types/Users";

interface LoginResponse {
  user?: User | null;
  token?: string | null;
  message?: string;
  errors?: { [key: string]: string[] }[];
}

interface LoginRequest {
  access_token: string;
}

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://droidcon-erp.herokuapp.com/api/v1",
  }),
  endpoints: (builder) => ({
    googleSocialAuth: builder.mutation<LoginResponse, LoginRequest>({
      query: (arg) => {
        const formData = new FormData();
        formData.append("access_token", arg.access_token);

        return {
          url: "/social_login/google",
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "Api-Authorization-Key": "droidconKe-2020",
          },
        };
      },
    }),
  }),
});

export const { useGoogleSocialAuthMutation } = userApi;
