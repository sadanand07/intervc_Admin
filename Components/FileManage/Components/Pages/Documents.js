// Import Data
import dumD from "../Data/DummyPrev.json";

// Import Components
import Card from "../Cards/Card";

// Import Styles
import styles from "./Page.module.scss";

export default function Documents() {
	return (
		<div className={`${styles.main} ${styles.home}`}>
			{dumD
				.filter((dat) => dat.type === "pdf")
				.map((dat) => (
					<Card key={dat.id} name={dat.name} url={dat.url} date={dat.date} type={dat.type} />
				))}
		</div>
	);
}
