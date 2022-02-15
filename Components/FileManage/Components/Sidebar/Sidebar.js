// Import Dependencies
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// Import Data
import { storage } from "../Data/Firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

// Import Styles
import styles from "./Sidebar.module.scss";

// Import React Icons
import { BsChevronLeft, BsFillFolderFill, BsFillFileEarmarkBreakFill, BsCardImage, BsCloudArrowUpFill } from "react-icons/bs";

export default function Sidebar() {
	const [file, setfile] = useState("");
	const [progrss, setprogrss] = useState(0);

	const fileref = useRef();

	function fileuploadHandler(e) {
		console.log(e.target.files[0]);
		setfile(e.target.files[0]);

		upload(file);
	}

	function upload(file) {
		if (file === null) {
			alert("select a file");
		} else if (file.type === "image/jpeg") {
			const imgRef = ref(storage, `images/${file.name}`);
			const upldtask = uploadBytesResumable(imgRef, file);
			upldtask.on(
				"state_changed",
				(snapshot) => {
					const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					setprogrss(prog + "img");
				},
				(err) => alert(err)
			);
		} else if (file.type === "application/pdf") {
			const docRef = ref(storage, `documents/${file.name}`);
			const uplodTask = uploadBytesResumable(docRef, file);
			uplodTask.on(
				"state_changed",
				(snapshot) => {
					const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					setprogrss(prog + "doc");
				},
				(err) => alert(err)
			);
		}
	}

	console.log(progrss);

	// Compact/Expand Quick Access
	const [compact, setCompact] = useState(false);
	const toggleView = () => {
		setCompact((show) => !show);
	};

	return (
		<div className={`${styles.overview} ${compact ? styles.compact : ""}`}>
			{/* Expand/Compact Icon */}
			<button className={styles.view} onClick={toggleView}>
				<BsChevronLeft className={styles.icon} />
			</button>

			{/* Heading */}
			<div className={styles.head}>
				<h2 className={styles.details}>Manage Files</h2>
			</div>

			<div className={styles.quickLinks}>
				<button className={styles.link} onClick={() => fileref.current.click()}>
					<input type="file" className={styles.filePicker} onChange={fileuploadHandler} ref={fileref} />
					<BsCloudArrowUpFill className={styles.icon} />
					<p className={styles.title}>Upload Document</p>
				</button>

				<NavLink to="/admin/filemanage/docs" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsFillFolderFill className={styles.icon} />
					<p className={styles.title}>All Files</p>
				</NavLink>

				<NavLink to="/admin/filemanage/files" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsFillFileEarmarkBreakFill className={styles.icon} />
					<p className={styles.title}>All Documents</p>
				</NavLink>

				<NavLink to="/admin/filemanage/media" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsCardImage className={styles.icon} />
					<p className={styles.title}>All Media</p>
				</NavLink>

				<NavLink to="/" className={styles.link}>
					<BsFillFolderFill className={styles.icon} />
					<p className={styles.title}>Exit</p>
				</NavLink>
			</div>
		</div>
	);
}
