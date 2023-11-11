import { baseApi } from "@/shared/api"
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./types/stateSchema"
import { noteReducer } from "@/entities/note"


export const createStore = () => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        api: baseApi.reducer,
        note: noteReducer


    }
    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        middleware: (gDM) => gDM().concat(baseApi.middleware)
    })
    return store
}
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];