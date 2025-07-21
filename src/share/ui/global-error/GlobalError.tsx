import { Backdrop, Portal } from "@mui/material"

interface GLobalErrorProps {
	open: boolean
}

const GlobalError = ({ open }: GLobalErrorProps) => {
	return (
		<Portal>
			<Backdrop
				sx={{ color: "#fff", zIndex: theme => theme.zIndex.modal + 1 }}
				open={open}
			>
				<div style={{ color: "red", fontSize: "32px" }}>
					Произошла ошибка! Обновите страницу
				</div>
			</Backdrop>
		</Portal>
	)
}

export default GlobalError
