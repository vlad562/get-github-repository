import { baseApi } from "@/share"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import searchReducer from "@/features/form-search/model/slice"

const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	searchUI: searchReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer> // состояние
export type AppStore = typeof store // тип самого store
export type AppDispatch = typeof store.dispatch // тип dispatch
