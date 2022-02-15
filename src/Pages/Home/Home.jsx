// Import Dependencies
import { Outlet } from "react-router-dom";

// Import Components
import QuickAccessIntro from "../../Components/QuickAccess/Intro/Intro";
// import MainContentProfileDetails from "../Components/MainContent/ProfileDetails/ProfileDetails";

// Import Styles
import global from "../Global.module.scss";

export default function Home() {
	return (
		<section className={global.parentContainer}>
			{/* Quick Access */}
			<section className={global.level_2}>
				<QuickAccessIntro />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<Outlet />
				{/* <MainContentScheduleDetails /> */}
				{/* <MainContentProfileDetails /> */}
			</section>
		</section>
	);
}
