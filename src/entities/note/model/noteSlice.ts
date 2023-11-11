import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortMode } from "../types/types";
import { StateSchema } from "@/app/types/stateSchema";

export type NoteSliceState = {
    sortMode: SortMode
}
const initialState: NoteSliceState = {
    sortMode: 'desc'
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setSortMode: (state, action: PayloadAction<SortMode>) => {
            state.sortMode = action.payload
        }
    }

})
export const selectSortMode = (state: StateSchema) => state.note.sortMode
export const { actions: noteActions } = noteSlice;
export const { reducer: noteReducer } = noteSlice;