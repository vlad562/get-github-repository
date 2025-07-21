import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from "react-redux"
import type { RootState, AppDispatch } from "@/app/store/store"

// Типизированная версия useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// export const useAppDispatch = () => useDispatch<AppDispatch>()


// Типизированная версия useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

