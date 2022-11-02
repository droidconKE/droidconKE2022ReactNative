import { API_URL, EVENT_SLUG } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pagination } from "../types/Pagination";
import Session from '../types/Session';
import type { RootState } from '../state/store';
interface SessionsResponse {
    data?: Session[];
    meta?: Pagination;
}

interface SessionRequest {
    per_page: string,
    page?: string,
}

// Define a service using a base URL and expected endpoints
export const sessionsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
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
        getSessions: builder.mutation<SessionsResponse, SessionRequest>({
            query: (arg) => {
                const formData = new FormData();
                formData.append("event_slug", EVENT_SLUG);
                (arg.per_page && formData.append("per_page", arg.per_page));

                return {
                    url: 'sessions',
                    method: 'GET',
                    body: formData,
                }
            }
        })
    })
})

// Export hooks for usage in functional components which are
// auto-generated based on the defined endpoints
export const { useGetSessionsMutation } = sessionsApi;