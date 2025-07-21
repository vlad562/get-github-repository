import FormSearch from "@/features/form-search/ui/FormSearch"
import Style from "@/widgets/header/ui/header.module.sass"

const Header = () => {
	return (
		<header className={Style.header}>
			<FormSearch />
		</header>
	)
}

export default Header
