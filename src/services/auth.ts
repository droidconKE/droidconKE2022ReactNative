import { API_URL, EVENT_SLUG } from "@env";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../state/store";
import User from "../types/Users";
import Schedule from "../types/Schedule";

interface LoginResponse {
  user?: User | null;
  token?: string | null;
  message?: string;
  errors?: { [key: string]: string[] }[];
}

interface LoginRequest {
  access_token: string;
}

interface FeedbackResponse {
  message: string;
}

interface EventFeedbackRequest {
  feedback: string;
  rating: string;
}

interface SessionFeedbackRequest {
  feedback: string;
  rating: string;
  sessionSlug: string;
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
    sendEventFeedback: builder.mutation<FeedbackResponse, EventFeedbackRequest>({
      query: (arg) => {
        const formData = new FormData();
        formData.append("feedback", arg.feedback);
        formData.append("rating", arg.rating);

        return {
          url: `/events/${EVENT_SLUG}/feedback`,
          method: "POST",
          body: formData,
        }
      }
    }),
    sendSessionFeedback: builder.mutation<FeedbackResponse, SessionFeedbackRequest>({
      query: (arg) => {
        const formData = new FormData();
        formData.append("feedback", arg.feedback);
        formData.append("rating", arg.rating);

        return {
          url: `/events/${EVENT_SLUG}/feedback/sessions/${arg.sessionSlug}`,
          method: "POST",
          body: formData,
        }
      }
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGoogleSocialAuthMutation, useGetScheduleQuery, useSendEventFeedbackMutation, useSendSessionFeedbackMutation } = userApi;
