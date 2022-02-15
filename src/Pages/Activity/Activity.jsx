// Import Dependencies
import { useState } from "react";

// Import Components
import QuickAccessActivityHistory from "../../Components/QuickAccess/ActivityHistory/ActivityHistory";
import MainContentActivityHistory from "../../Components/MainContent/ActivityHistory/ActivityHistory";

// Import Styles
import global from "../Global.module.scss";

export default function Activity() {
	const [selectedmonth, setMonth] = useState("");

	return (
		<section className={global.parentContainer}>
			{/* Quick Access */}
			<section className={global.level_2}>
				<QuickAccessActivityHistory setMonth={setMonth} />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<MainContentActivityHistory selectedmonth={selectedmonth} />
			</section>
		</section>
	);
}
