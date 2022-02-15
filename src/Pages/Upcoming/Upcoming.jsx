// Import Dependencies
import { useState } from "react";

// Import Components
import QuickAccessUpcomingScheduled from "../../Components/QuickAccess/UpcomingSchedule/UpcomingSchedule";
import MainContentUpcomingScheduled from "../../Components/MainContent/UpcomingSchedule/UpcomingSchedule";

// Import Styles
import global from "../Global.module.scss";

export default function Upcoming() {
	const [selectedmonth, setMonth] = useState("");

	return (
		<section className={`${global.parentContainer} ${styles.home}`}>
			{/* At A Glance Panel */}
			<section className={global.level_2}>
				<QuickAccessUpcomingScheduled setMonth={setMonth} />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<section className={global.tools}>
					<NavigationContext />
				</section>
				<section className={global.content}>
					<MainContentUpcomingScheduled selectedmonth={selectedmonth} />
				</section>
			</section>
		</section>
	);
}
