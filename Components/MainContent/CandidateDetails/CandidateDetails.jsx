// Import Dependencies
import axios from "axios";
import { useEffect, useState } from "react";

// Import Styles
import styles from "./CandidateDetails.module.scss";

export default function MainContentCandidateDetails({ userSelected, setLoading, List_Url }) {
	const token = localStorage.getItem("token");
	const [Details, setDetails] = useState({});
	useEffect(() => {
		async function getData() {
			await axios
				.get(`https://shivila.herokuapp.com/api/v1/users/${userSelected} `, {
					headers: {
						Authorization: "Token " + token,
					},
				})
				.then((res) => {
					const { data } = res;
					console.log(res);
					setDetails(data);
					/*  console.log(data); */
				})
				.catch((err) => {
					console.log(err);
				});
		}

		getData();
	}, [token, userSelected]);

	return (
		// Content In Home Page
		<section className={styles.intro}>
			{/* Profile Details */}
			<div className={styles.profile}>
				{/* Profile Image */}
				<div className={styles.imageContainer}>
					<img className={styles.image} src="/image/account/Male.png" alt="Male" />
				</div>

				{/* Interview Details */}
				<div className={styles.text}>
					{/* Informations */}
					<div className={styles.group}>
						<p className={styles.field}>Name</p>
						<p className={styles.details}>{Details.full_name}</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Employee ID</p>
						<p className={styles.details}>{`SG01012022${Details.id}`}</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Job Role</p>
						<p className={styles.details}>HR</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Qualification</p>
						<p className={styles.details}>B.Tech in CST</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Joining Date</p>
						<p className={styles.details}>{Details.date_joined}</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Location</p>
						<p className={styles.details}>Haldia</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Cost To Company</p>
						<p className={styles.details}>Rs. 30,000</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Mobile</p>
						<p className={styles.details}>(+91) 987 654 3210</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Email</p>
						<p className={styles.details}>{Details.email}</p>
					</div>
				</div>
			</div>

			<div className={styles.interview}>
				{
					<>
						{/* Heading */}
						<div className={styles.head}>
							<h2 className={styles.details}>Upcoming Scheduled Interview</h2>
						</div>

						<div className={styles.tableContent}>
							<table className={styles.table}>
								<thead className={styles.tableHead}>
									<tr className={styles.tableRow}>
										<th className={styles.details}>Candidate Name</th>
										<th className={styles.details}>Primary Skill</th>
										<th className={styles.details}>Date</th>
										<th className={styles.details}>Time</th>
										<th className={styles.details}>View</th>
									</tr>
								</thead>
								{/* {<tbody className={styles.tableBody}>{MeetingDetails}</tbody>} */}
							</table>
						</div>
					</>
				}
			</div>
		</section>
	);
}
