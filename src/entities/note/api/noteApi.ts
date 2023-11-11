import { NOTES_TAG, baseApi } from "@/shared/api";
import { ReqAddNoteDto, ReqNoteDetailsDto, ReqNotesDto, ReqSortNotesDto, ResAddNoteDto, ResNoteDetailsDto, ResNotesDto, ResSortNotesDto } from "../types/types";

export const noteApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getNotes: build.query<ResNotesDto, ReqNotesDto>({
            query: () => ({
                url: '/notes',

            }),
            providesTags: [NOTES_TAG]
        }),
        getNoteDetails: build.query<ResNoteDetailsDto, ReqNoteDetailsDto>({
            query: ({ id }) => ({
                url: `/notes/${id}`,

            })
        }),
        addNote: build.mutation<ResAddNoteDto, ReqAddNoteDto>({
            query: ({ body, datetime, title }) => ({
                url: '/notes',
                body: { body, datetime, title },
                method: 'POST'
            }),
            invalidatesTags: [NOTES_TAG]
        }),
        sortNotes: build.query<ResSortNotesDto, ReqSortNotesDto>({
            query: (mode: ReqSortNotesDto) => ({
                url: `/notes?_sort=datetime&_order=${mode}`
            }),
            providesTags: [NOTES_TAG]
        }),
        deleteNote: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/notes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [NOTES_TAG]
        })
    })
})
export const { useGetNoteDetailsQuery, useGetNotesQuery, useAddNoteMutation, useLazySortNotesQuery, useSortNotesQuery, useDeleteNoteMutation } = noteApi