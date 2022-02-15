// Import Dependencies
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// Import Components
import Search from "../../Search/Search";

// Import Data
import { meetingUpDate } from "./MeetingUpDate";

// Import Styles
import styles from "./AppliedCandidates.module.scss";

export default function MainContentAppliedCandidates({ selectedmonth }) {
	console.log(selectedmonth);
	// let navigate = useNavigate();
	const MeetingDetails = meetingUpDate
		.filter((data) => {
			if (!selectedmonth) {
				return data;
			} else {
				return data.month === selectedmonth;
			}
		})
		.map((data, indx) => {
			return (
				<>
					<tr className={styles.tableRow} key={indx}>
						<td className={styles.details}>{data.Candidate_Name}</td>
						{/* <td className={styles.details}>{data.HR_Name}</td> */}
						<td className={styles.details}>{data.Primary_Skill}</td>
						<td className={styles.details}>{data.Date}</td>
						<td className={styles.details}>{data.Time}</td>
						<td className={styles.details}>
							<Link to="/admin/ProfileDetail">
								<button
								// onClick={() => {
								//   ("DetailsProfile");
								// }}
								>
									{data.View}
								</button>
							</Link>
						</td>
					</tr>
				</>
			);
		});
	return (
		// Content In Home Page
		<section className={styles.intro}>
			{/* Heading */}
			<div className={styles.head}>
				<h2 className={styles.details}>Applied Candidates</h2>
				<Search />
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
					{<tbody className={styles.tableBody}>{MeetingDetails}</tbody>}
				</table>
			</div>
		</section>
	);
}
