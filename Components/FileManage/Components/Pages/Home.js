// Import Dependencies
import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";

// Import Data
import dumData from "../Data/DummyPrev.json";
import { storage } from "../Data/Firebase";

// Import Components
import Card from "../Cards/Card";

// Import Styles
import styles from "./Page.module.scss";

export default function Home2() {
	const [Data, setData] = useState([]);

	useEffect(() => {
		function listFiles() {
			const storageRef = ref(storage, "images");

			const hlD = [];

			listAll(storageRef).then((res) => {
				res.items.forEach((itemRef) => {
					getDownloadURL(itemRef).then((url) => {
						hlD.push(url);
					});
				});
			});

			setData(hlD);
		}

		listFiles();
	}, []);

	console.log(Data);

	return (
		<div className={`${styles.main} ${styles.home}`}>
			{dumData.map((dat) => (
				<Card key={dat.id} name={dat.name} url={dat.url} date={dat.date} type={dat.type} />
			))}
		</div>
	);
}
