// Import Dependencies
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import { CreateJobAction } from "../../../ReduxStore/Actions/CreateJobAction";

// Import Styles
import styles from "./CreateJob.module.scss";

export default function MainContentCreateJob() {
	const dispatch = useDispatch();
	const resetform = useRef();

	useSelector((state) => state.viewjob);
	// const isloading = viewjob.isloading;

	const [jobDetails, setJobDetails] = useState({
		/*    extra_fields:null, */
		title: "",
		jobtype: "",
		location: "",
		description: "",
		positions: "",
		category: "",
		min_qualification: "",
		min_experience: "",
		required_skills: "",
		ctc: "",
		/*  posted_by: null */
	});

	const onChangeHandler = (e) => {
		e.preventDefault();
		const { id, value } = e.target;

		setJobDetails((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(CreateJobAction(jobDetails, setJobDetails));
	};
	return (
		// Content In Login Page
		<section className={styles.createJob}>
			{/* Profile Details */}
			<div className={styles.content}>
				{/* Left Side Message */}
				<div className={styles.message}>
					<h2 className={styles.title}>Create New Job</h2>
					<p className={styles.details}>Please fill the required details</p>
				</div>

				{/* Login Form */}
				<form ref={resetform} className={styles.loginForm} onSubmit={submitHandler}>
					{/* Input Fields */}
					<div className={styles.inputField}>
						<div className={styles.group}>
							<p className={styles.title}>Job Title</p>
							<input className={styles.input} type="text" placeholder="Job Role" id="title" value={jobDetails.title} onChange={onChangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Minimum Qualification</p>
							<input className={styles.input} type="text" placeholder="Degree" id="min_qualification" value={jobDetails.min_qualification} onChange={onChangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Job type</p>
							<input className={styles.input} type="text" placeholder="technical" id="jobtype" value={jobDetails.jobtype} onChange={onChangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Location</p>
							<input className={styles.input} type="text" placeholder="Location" id="location" value={jobDetails.location} onChange={onChangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Minimum Experience</p>
							<input className={styles.input} type="text" placeholder="Experience" id="min_experience" value={jobDetails.min_experience} onChange={onChangeHandler} required />
						</div>

						<div className={styles.group}>
							<p className={styles.title}>Category</p>
							<input className={styles.input} type="text" placeholder="Category" id="category" value={jobDetails.category} onChange={onChangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Required Skills</p>
							<input className={styles.input} type="text" placeholder="Minimum 3 Skills" id="required_skills" value={jobDetails.required_skills} onChange={onChangeHandler} required />
						</div>

						<div className={styles.group}>
							<p className={styles.title}>Cost to Company</p>
							<input className={styles.input} type="text" placeholder="CTC" id="ctc" value={jobDetails.ctc} onChange={onChangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}> Job Description</p>
							<textarea className={styles.input} placeholder="Description" id="description" value={jobDetails.description} onChange={onChangeHandler} required></textarea>
						</div>
					</div>

					{/* Login Button */}
					<div className={styles.submit}>
						<input className={styles.btn} type="submit" value="Create Post" />
					</div>
				</form>
			</div>
		</section>
	);
}
