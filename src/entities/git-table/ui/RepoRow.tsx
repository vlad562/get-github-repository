import * as React from "react"
import { TableRow, TableCell } from "@mui/material"
import type { GitHubRepo } from "../model/interface"

interface RepoRowProps {
	row: GitHubRepo
	isActive: boolean
	setActiveId: React.Dispatch<React.SetStateAction<number>>
}

export const RepoRow = React.memo(
	({ row, isActive, setActiveId }: RepoRowProps) => {
		const updatedDate = React.useMemo(
			() => new Date(row.updated_at).toLocaleDateString("ru-RU"),
			[row.updated_at]
		)

		console.log(`Render RepoRow id=${row.id}`)

		return (
			<TableRow
				onClick={() => setActiveId(row.id)}
				sx={{
					cursor: "pointer",
					backgroundColor: isActive
						? "rgba(33, 150, 243, 0.04)"
						: "transparent",
				}}
			>
				<TableCell>{row.name}</TableCell>
				<TableCell>{row.language}</TableCell>
				<TableCell>{row.forks}</TableCell>
				<TableCell>{row.stargazers_count}</TableCell>
				<TableCell>{updatedDate}</TableCell>
			</TableRow>
		)
	}
)
