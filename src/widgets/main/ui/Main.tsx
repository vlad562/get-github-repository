import { Sidebar } from "@/features/side-bar"
import GitTable from "@/entities/git-table/ui/GitTable"
import { useState } from "react"
import { useAppSelector } from "@/share"
import { Box, Typography } from "@mui/material"
import Pagination from "@/features/pagination/ui/Pagination"
import Style from "@/widgets/main/ui/main.module.sass"

const Main = () => {
	const [activeId, setActiveId] = useState<number>(-1) // получение выброного репозитория на странице
	const { queryInput } = useAppSelector(store => store.searchUI)
	if (!queryInput) {
		return (
			<main className={Style.main}>
				<Typography className={Style.hello}>Добро пожаловать</Typography>
			</main>
		)
	}
	return (
		<main className={Style.main}>
			<Box
				component="section"
				sx={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					pl: 4,
					pt: 3,
				}}
			>
				<GitTable
					activeId={activeId}
					setActiveId={setActiveId}
				/>
				<Pagination />
			</Box>

			<Box>
				<Sidebar activeId={activeId} />
			</Box>
		</main>
	)
}

export default Main
