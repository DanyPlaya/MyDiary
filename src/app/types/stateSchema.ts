
import { NoteSliceState } from "@/entities/note"
import { baseApi } from "@/shared/api"


export type StateSchema = {
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
    note: NoteSliceState
}