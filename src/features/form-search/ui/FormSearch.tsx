import { useState, useCallback, type FormEvent } from "react"
import { Input, useAppDispatch, useAppSelector } from "@/share"
import { useLazySearchRepositoryQuery } from "@/entities/git-table/api/searchRepository"
import { setQueryInput } from "../model/slice"
import Style from "@/features/form-search/ui/formSearch.module.sass"

const FormSearch = () => {
	const [value, setValue] = useState<string>("")
    
	const dispatch = useAppDispatch()
	const { page, perPage } = useAppSelector(store => store.searchUI)
	const [trigger] = useLazySearchRepositoryQuery()

	const onSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			if (value.trim()) {
				dispatch(setQueryInput(value))
				trigger({ q: value, page, perPage })
			}
		},
		[value, dispatch, trigger, page, perPage]
	)

	return (
		<form onSubmit={onSubmit}>
			<Input
				type="text"
				placeholder="Введите поисковый запрос"
				value={value}
				onChange={e => setValue(e.target.value)}
				className={Style.input}
			/>
			<button className={Style.button}>Искать</button>
		</form>
	)
}

export default FormSearch
