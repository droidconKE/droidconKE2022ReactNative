import { API_URL, EVENT_SLUG } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pagination } from "../types/Pagination";
import { RootState } from "../state/store";
import Session from "../types/Session";
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
interface SessionsResponse<T> {
    data?: T[];
    meta?: Pagination;
}

interface SessionRequest {
    per_page: string,
    page: string,
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,

    // add token if it exists
        prepareHeaders: (headers, { getState }) => {
          const token = (getState() as RootState).user.token;

          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
              headers.set('authorization', `Bearer ${token}`);
          }

          return headers;
      }
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
    getSessions: builder.query<SessionsResponse<Session>, SessionRequest>({
        query: ({per_page, page = "1"}) => {
            const formData = new FormData();
            formData.append("event_slug", EVENT_SLUG);
            (per_page && formData.append("per_page", per_page));
            formData.append("page", page)
            return {
                url: 'sessions',
                method: 'GET',
                body: formData,
            }
        }
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGoogleSocialAuthMutation, useGetSessionsQuery } = userApi;
