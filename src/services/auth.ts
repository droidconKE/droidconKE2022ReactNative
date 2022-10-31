import { API_URL } from "@env";
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

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGoogleSocialAuthMutation } = userApi;
