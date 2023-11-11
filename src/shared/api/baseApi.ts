import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NOTES_TAG } from './tags'
export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json")
            return headers
        }
    }),
    tagTypes: [NOTES_TAG],
    endpoints: () => ({})
})