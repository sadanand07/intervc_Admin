// Import Components
import App from "../../Components/FileManage/App";
import Sidebar from "../../Components/FileManage/Components/Sidebar/Sidebar";

// Import Styles
import global from "../Global.module.scss";

export default function FileManage() {
	return (
		<section className={global.parentContainer}>
			{/* Quick Access */}
			<section className={global.level_2}>
				<Sidebar />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<App />
			</section>
		</section>
	);
}
