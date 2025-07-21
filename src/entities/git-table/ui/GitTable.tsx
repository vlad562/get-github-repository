import * as React from "react"
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	Paper,
	Typography,
} from "@mui/material"
import type { GitHubRepo } from "../model/interface"
import { useSearchRepositories } from "@/share/lib/hooks/useSearchRepositories"
import GlobalLoader from "@/share/ui/global-loader/GlobalLoader"
import { RepoRow } from "./RepoRow"
import GlobalError from "@/share/ui/global-error/GlobalError"

// типизация props
interface GitTableProps {
	activeId: number | null
	setActiveId: React.Dispatch<React.SetStateAction<number>>
}

// данные для столбцов в таблице
interface Repo {
	name: string
	language: string
	forks: number
	stargazers_count: number
	updated_at: string
}

type Order = "asc" | "desc"

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) return -1
	if (b[orderBy] > a[orderBy]) return 1
	return 0
}

function getComparator<K extends keyof GitHubRepo>(
	order: Order,
	orderBy: K
): (a: GitHubRepo, b: GitHubRepo) => number {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

const headCells = [
	{ id: "name", label: "Название" },
	{ id: "language", label: "Язык" },
	{ id: "forks", label: "Число форков" },
	{ id: "stargazers_count", label: "Число звезд" },
	{ id: "updated_at", label: "Дата обновления" },
]

export default function RepoTable({ activeId, setActiveId }: GitTableProps) {
	const [order, setOrder] = React.useState<Order>("asc")
	const [orderBy, setOrderBy] = React.useState<keyof Repo>("name")

	const { data, isError, isFetching } = useSearchRepositories()

	const handleRequestSort = (property: keyof Repo) => {
		const isAsc = orderBy === property && order === "asc"
		setOrder(isAsc ? "desc" : "asc")
		setOrderBy(property)
	}

	// сортировка по столбцам и мемоизацция ответа
	const sortedRows = React.useMemo(() => {
		if (!data?.items) return []
		return [...data.items].sort(getComparator(order, orderBy))
	}, [order, orderBy, data?.items])

	if (isError) {
		return <GlobalError open={isError} />
	}

	return (
		<>
			<GlobalLoader open={isFetching} />

			<Typography
				variant="h4"
				sx={{ mb: 2 }}
			>
				Результаты поиска
			</Typography>

			<TableContainer
				component={Paper}
				sx={{ width: "100%", flex: 1, boxShadow: "none" }}
			>
				<Table>
					<TableHead>
						<TableRow>
							{headCells.map(headCell => (
								<TableCell
									key={headCell.id}
									sortDirection={orderBy === headCell.id ? order : false}
								>
									<TableSortLabel
										active={orderBy === headCell.id}
										direction={orderBy === headCell.id ? order : "asc"}
										onClick={() => handleRequestSort(headCell.id as keyof Repo)}
										hideSortIcon={false}
										sx={{
											display: "flex",
											flexDirection: "row-reverse",
											justifyContent: "flex-end",
										}}
									>
										<Typography fontWeight="bold">{headCell.label}</Typography>
									</TableSortLabel>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{sortedRows.map(row => (
							<RepoRow
								key={row.id}
								row={row}
								isActive={activeId === row.id}
								setActiveId={setActiveId}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
