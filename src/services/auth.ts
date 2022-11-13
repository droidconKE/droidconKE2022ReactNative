import { API_URL, EVENT_SLUG } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../state/store";
import User from "../types/Users";
import Schedule from "../types/Schedule";
import { Pagination } from "../types/Pagination";
import Feed from "../types/Feed";

interface LoginResponse {
  user?: User | null;
  token?: string | null;
  message?: string;
  errors?: { [key: string]: string[] }[];
}

interface LoginRequest {
  access_token: string;
}

interface  FeedsResponse<T> {
  data: T[],
  meta: Pagination
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,

    // add token if it exists
        prepareHeaders: (headers, { getState }) => {
          const user = (getState() as RootState).user;
          
          // If we have a token set in state, let's assume that we should be passing it.
          if (user.token) {
            headers.append('Api-Authorization-Key','droidconKe-2020');
            headers.append('Authorization', `Bearer ${user.token}`);
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
    getSchedule: builder.query<Schedule, void>({
        query: () => {
          return {
            url: `/events/${EVENT_SLUG}/schedule?grouped=true`,
            method: 'GET',
          }
        }
    }),
    getFeeds: builder.query<FeedsResponse<Feed>, string | Blob>({
      query: (page = '1') => {
        const formData = new FormData();
        formData.append("per_page", "10");
        formData.append("page", page);
        return {
          url:  `/events/${EVENT_SLUG}/feeds?${formData}`
        }
      }
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGoogleSocialAuthMutation, useGetScheduleQuery, useGetFeedsQuery } = userApi;
