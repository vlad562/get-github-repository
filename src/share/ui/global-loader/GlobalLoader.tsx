import { Backdrop, CircularProgress, Portal } from "@mui/material"

interface GlobalLoaderProps {
	open: boolean
}

const GlobalLoader = ({
	open,
}: GlobalLoaderProps) => {
	return (
		<Portal>
			<Backdrop
				sx={{ color: "#fff", zIndex: theme => theme.zIndex.modal + 1 }}
				open={open}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Portal>
	)
}

export default GlobalLoader
