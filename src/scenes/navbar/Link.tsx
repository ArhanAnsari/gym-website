import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

const Link = (props: Props) => {

	const lowerCasePage = props.page.toLowerCase().replace(/ /g, "-") as SelectedPage;

	return (
		<AnchorLink
			href={`#${lowerCasePage}`}
			onClick={() => props.setSelectedPage(lowerCasePage)}
			className={`${props.selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}>
			{props.page}
		</AnchorLink>
	)
}

export default Link