// Import Dependencies
import axios from "axios";
import { useState } from "react";

// Import Styles
import styles from "./CreateHR.module.scss";

// Constants
const create_hr_url = "https://shivila.herokuapp.com/api/v1/register/?role=hr";

export default function MainContentCreateHR() {
	const [cemail, setCemail] = useState("");
	const [credentails, setCredentials] = useState({
		email: "",
		password: "",
		phone_number: "",
		full_name: "",
		company_id: 1,
	});
	const [Res, setRes] = useState({
		status: "",
		message: "",
	});

	const SubmitHandler = async (e) => {
		e.preventDefault();

		if (credentails.email === cemail) {
			const token = localStorage.getItem("token");
			console.log();
			await axios
				.post(create_hr_url, credentails, {
					headers: {
						Authorization: "Token " + token,
					},
				})
				.then((res) => {
					const { status } = res;

					console.log(res);
					setRes((pre) => ({
						...pre,
						status: status,
						message: "Hr Successfully Created",
					}));
					setCredentials({
						email: "",
						phonenumber: "",
						fullname: "",
					});
					setCemail("");
					alert(Res.status + Res.message);
				})
				.catch((err) => {
					console.log(err.response.data);
					console.log(err.response.status);

					setRes((pre) => ({
						...pre,
						status: err,
						message: "Something Went wrong",
					}));
					setCredentials({
						email: "",
						phonenumber: "",
						fullname: "",
					});
					setCemail("");
					/*    alert("Something went wrong"); */
				});
		} else {
			setRes((pre) => ({
				...pre,
				message: "Email not match",
			}));
		}
		setCredentials({
			email: "",
			phonenumber: "",
			fullname: "",
		});
	};

	const OnchangeHandler = (e) => {
		const { id, value } = e.target;
		setCredentials((previouState) => ({
			...previouState,
			[id]: value,
		}));
	};

	return (
		// Content In Login Page
		<section className={styles.createHR}>
			{/* Profile Details */}
			<div className={styles.content}>
				{/* Left Side Message */}
				<div className={styles.message}>
					<h2 className={styles.title}>Create HR</h2>
					<p className={styles.details}>Please fill the required details</p>
				</div>

				{/* Login Form */}
				<form className={styles.loginForm} onSubmit={SubmitHandler}>
					{/* Input Fields */}
					<div className={styles.inputField}>
						<div className={styles.group}>
							<p className={styles.title}>Name</p>
							<input className={styles.input} type="text" placeholder="Full Name" value={credentails.fullname} id="full_name" onChange={OnchangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Mobile</p>
							<input className={styles.input} type="tel" placeholder="Mobile Number" value={credentails.phonenumber} id="phone_number" onChange={OnchangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Email</p>
							<input className={styles.input} type="email" placeholder="Email" value={credentails.email} id="email" onChange={OnchangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Password</p>
							<input className={styles.input} type="text" placeholder="password" value={credentails.password} id="password" onChange={OnchangeHandler} required />
						</div>
						<div className={styles.group}>
							<p className={styles.title}>Confirm Email</p>
							<input className={styles.input} type="email" placeholder="Confirm Email" value={cemail} onChange={(e) => setCemail(e.target.value)} required />
						</div>
					</div>

					{/* Login Button */}
					<div className={styles.submit}>
						<input className={styles.btn} type="submit" value="Create HR" />
					</div>
				</form>
			</div>
		</section>
	);
}
