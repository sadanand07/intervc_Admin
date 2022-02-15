// Import Dependencies
import React from "react";
import { useContext } from "react";

// Import Components
import { UiContext } from "../Ui/UiContext";

// Import Styles
import styles from "./Card.module.scss";

// Import React Icons
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Card(props) {
	const { setsOurce, setprevState } = useContext(UiContext);

	const { name } = props;

	const hanleClick = () => {
		setsOurce(props);
		setprevState(true);
	};

	return (
		<div className={styles.card} onClick={hanleClick}>
			<p className={styles.fileName}>{name}</p>
			<BsThreeDotsVertical className={styles.icon} />
		</div>
	);
}
