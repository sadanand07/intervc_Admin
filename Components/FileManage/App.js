// Import Dependencies
import { Outlet } from "react-router-dom";

// Import Components
import Ui from "./Components/Ui/Ui";

// Import
import styles from "./App.module.scss";

export default function App() {
	return (
		<div className={styles.container}>
			<Ui />
			<Outlet />
		</div>
	);
}
