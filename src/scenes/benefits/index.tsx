import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = (props: Props) => {
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.Benefits)}>
				<div className="md:my-5 md:w-3/5">
					<HText>
						More Than Just a Gym
					</HText>
					<p className="my-5 text-sm">
						We provide world class fitness equipment, trainers and classes to
						get you to your ultimate fitness goals with ease. We provide true
						care into each and every member.
					</p>
				</div>
			</motion.div>
		</section>
	)
}

export default Benefits