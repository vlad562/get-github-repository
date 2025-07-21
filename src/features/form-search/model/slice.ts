import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// типизация initialState стора
interface SearchUIState {
	queryInput: string
	selectedFullName: string | null
	page: number
	perPage: number
}

const initialState: SearchUIState = {
	queryInput: "",
	selectedFullName: null,
	page: 1,
	perPage: 10,
}

const slice = createSlice({
	name: "searchUI",
	initialState,
	reducers: {
		setQueryInput: (s, a: PayloadAction<string>) => {
			s.queryInput = a.payload
			s.page = 1
		},
		setPage: (s, a: PayloadAction<number>) => {
			s.page = a.payload
		},
		setPageSize: (s, a: PayloadAction<number>) => {
			s.perPage = a.payload
			s.page = 1
		},
	},
})

export const { setQueryInput, setPage, setPageSize } =
	slice.actions 
export default slice.reducer
