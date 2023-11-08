import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./types/stateSchema"
import { baseApi } from "@/shared/api"


export const createStore = () => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        api: baseApi.reducer
    }
    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        middleware: (gDM) => gDM().concat(baseApi.middleware)
    })
    return store
}
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];