import { useSearchRepositories } from "@/share/lib/hooks/useSearchRepositories"
import { Star } from "@mui/icons-material"
import { Box, Typography, Card, CardContent, Stack, Chip } from "@mui/material"

interface GitTableProps {
	activeId: number
}

export const Sidebar = ({ activeId }: GitTableProps) => {
	const { data } = useSearchRepositories()

	const currentRep = data.items.find(r => r.id === activeId)

	return (
		<Card sx={{ width: 480, height: "100%", background: "#f2f2f2", boxShadow: "none"}}>
			{!currentRep ? (
				<CardContent
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						textAlign: "center",
						background: "#f2f2f2",
					}}
				>
					<Typography>Выберите репозитарий</Typography>
				</CardContent>
			) : (
				<CardContent>
					<Typography
						variant="h5"
						component="div"
						gutterBottom
					>
						{currentRep.full_name}
					</Typography>

					{/* Теги и метки */}
					<Stack
						direction="row"
						justifyContent={"space-between"}
						alignItems={"center"}
						spacing={1}
						sx={{ mb: 2 }}
						flexWrap="wrap"
						gap={1}
					>
						<Chip
							label={currentRep?.language ? currentRep?.language : "Нет языка"}
							variant="filled"
							size="small"
							sx={{
								"backgroundColor": "#2196f3",
								"color": "white",
								"& .MuiChip-label": { color: "white" },
							}}
						/>

						<Chip
							icon={<Star fontSize="small" />}
							label={currentRep.stargazers_count.toLocaleString()}
							size="medium"
							sx={{
								"backgroundColor": "transparent !important",
								"border": "none !important",
								"boxShadow": "none !important",
								"color": "inherit",
								"& .MuiChip-icon": {
									color: "#ffd700 !important",
									marginLeft: 0,
								},
							}}
						/>
					</Stack>

					<Stack
						direction="row"
						spacing={1}
						sx={{ mb: 2 }}
						flexWrap="wrap"
						gap={1}
					>
						{currentRep.topics.map((elem, idx) => (
							<Chip
								key={idx}
								label={elem}
								size="small"
							/>
						))}
					</Stack>

					<Box sx={{ mt: 2 }}>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							{currentRep.license?.spdx_id
								? currentRep.license.spdx_id + " license"
								: "Нет лицензии"}
						</Typography>
					</Box>
				</CardContent>
			)}
		</Card>
	)
}
