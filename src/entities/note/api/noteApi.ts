import { baseApi } from "@/shared/api";
import { ReqNoteDetailsDto, ReqNotesDto, ResNoteDetailsDto, ResNotesDto } from "../types/types";

export const noteApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getNotes: build.query<ReqNotesDto, ResNotesDto>({
            query: () => ({
                url: '/notes'
            })
        }),
        getNoteDetails: build.query<ReqNoteDetailsDto, ResNoteDetailsDto>({
            query: ({ id }) => ({
                url: `/notes/${id}`
            })
        })
    })
})
export const { useGetNoteDetailsQuery, useGetNotesQuery } = noteApi