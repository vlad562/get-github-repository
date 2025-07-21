import React, { useCallback } from "react"
import TablePagination from "@mui/material/TablePagination"
import { useAppDispatch, useAppSelector } from "@/share"
import { setPage, setPageSize } from "@/features/form-search/model/slice"
import { useSearchRepositories } from "@/share/lib/hooks/useSearchRepositories"

const Pagination = React.memo(() => {
	const dispatch = useAppDispatch()
	const { data } = useSearchRepositories()
	const { page, perPage } = useAppSelector(state => state.searchUI)

	const handleChangePage = useCallback(
		(_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
			dispatch(setPage(newPage + 1)) // pagination
		},
		[dispatch]
	)

	const handleChangeRowsPerPage = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const newSize = Number(event.target.value) // получение нового количество отображаемых элементов
			dispatch(setPageSize(newSize)) // меняем количество отображаемых Repository на странице
			dispatch(setPage(1)) // сбрасываем на первую страницу при изменении размера
		},
		[dispatch]
	)

	return (
		<footer>
			<TablePagination
				sx={{ "& .MuiButtonBase-root": { boxShadow: "none" } }}
				component="div"
				count={data?.total_count ?? 0}
				page={page - 1}
				onPageChange={handleChangePage}
				rowsPerPage={perPage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				rowsPerPageOptions={[10, 25, 50, 100]}
			/>
		</footer>
	)
})

export default Pagination
