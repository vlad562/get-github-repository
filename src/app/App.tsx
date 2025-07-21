import { StoreProvider } from "./providers"
import { AppRouter } from "./router"
import "@/app/styles/index.css"
function App() {
	return (
		<StoreProvider>
			<AppRouter />
		</StoreProvider>
	)
}

export default App
