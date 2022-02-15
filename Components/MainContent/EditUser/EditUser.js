// Import Dependencies
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

// Import Actions
// import { UpdateUserAction } from "../../ReduxStore/Actions/updateuserAction";

// Import Styles
import style from "./EditUser.module.css";

// Import React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

const usersUrl = "http://shivila.herokuapp.com/api/v1/users/";

export default function Edituser({ cls, selectId }) {
	// const dispatch = useDispatch();
	const resetform = useRef();

	// useSelector((state) => state.updateUser);

	const updateUrl = "https://shivila.herokuapp.com/api/v1/users/" + selectId + "/";

	const [edit, setedit] = useState(false);
	const [fetchedData, setfetchedData] = useState([]);
	const token = localStorage.getItem("token");

	const [pass, setpass] = useState("");

	const [credential, setcredential] = useState({
		full_name: "",
		email: "",
		phone_number: "",
		password: "",
	});

	const [updateCreden, setupdateCreden] = useState({});

	function onchangeHandler(e) {
		e.preventDefault();

		const { id, value } = e.target;

		setcredential((prev) => ({
			...prev,
			[id]: value,
		}));

		if (credential.phone_number === "" && credential.password === "") {
			setupdateCreden({
				full_name: credential.full_name,
				email: credential.email,
			});
		} else if (credential.phone_number !== "" && credential.password === "") {
			setupdateCreden({
				full_name: credential.full_name,
				email: credential.email,
				phone_number: credential.phone_number,
			});
		} else if (credential.phone_number === "" && credential.password !== "") {
			setupdateCreden({
				full_name: credential.full_name,
				email: credential.email,
				password: credential.password,
			});
		} else {
			setupdateCreden({
				full_name: credential.full_name,
				email: credential.email,
				phone_number: credential.phone_number,
				password: credential.password,
			});
		}
	}

	function submitHandler(e) {
		e.preventDefault();

		// dispatch(UpdateUserAction(updateCreden,selectId,setupdateCreden,setcredential));
		axios
			.put(updateUrl, updateCreden, {
				headers: {
					Authorization: "Token " + token,
				},
			})
			.then((res) => {
				const { status } = res;
				console.log(status);
				setupdateCreden({});
				setcredential({
					email: "",
					phone_number: "",
					password: "",
					full_name: "",
				});

				alert("update sucessfull");
			})
			.catch((err) => {
				console.log(err.response.status);
				setupdateCreden({});
				setcredential({
					email: "",
					phone_number: "",
					password: "",
					full_name: "",
				});

				alert("error something went wrong");
			});
	}

	useEffect(() => {
		async function getUser() {
			await axios
				.get(usersUrl + selectId, {
					headers: {
						Authorization: "Token " + token,
					},
				})
				.then((res) => setfetchedData(res.data));
		}

		getUser();
	}, [selectId, token]);

	return (
		<>
			{edit ? (
				<form ref={resetform} onSubmit={submitHandler}>
					<div className={style.wrapper}>
						<div className={style.left}></div>
						<div className={style.right}>
							<div className={style.info}>
								<div>
									<div className={style.btnclose}>
										<AiOutlineCloseCircle
											style={{ fontSize: "1rem" }}
											onClick={() => {
												cls(false);
												setedit(false);
											}}
										/>
									</div>
									<h3>User details</h3>
								</div>
							</div>

							<div className={style.projects}>
								<div className={style.projects_data}>
									<div className={style.data}>
										<h4>Full Name</h4>
										<input type="text" id="full_name" placeholder={fetchedData.full_name} value={credential.full_name} onChange={onchangeHandler} />
									</div>
								</div>
							</div>

							<div className={style.projects}>
								<div className={style.projects_data}>
									<div className={style.data}>
										<h4>Email</h4>
										<input type="email" id="email" placeholder={fetchedData.email} value={credential.email} onChange={onchangeHandler} />
									</div>
								</div>
							</div>

							<div className={style.projects}>
								<div className={style.projects_data}>
									<div className={style.data}>
										<h4>Phone number</h4>
										<input type="number" id="phone_number" placeholder={fetchedData.phone_number} value={credential.phone_number} onChange={onchangeHandler} />
									</div>
								</div>
							</div>

							<div className={style.projects}>
								<div className={style.projects_data}>
									<div className={style.data}>
										<h4>Password</h4>
										<input
											type="password"
											placeholder="Password"
											value={pass}
											onChange={(e) => {
												setpass(e.target.value);
											}}
										/>
									</div>
								</div>
							</div>

							<div className={style.projects}>
								<div className={style.projects_data}>
									<div className={style.data}>
										<h4>confirm password</h4>
										<input type="password" id="password" placeholder="Confirm Password" value={credential.password} onChange={onchangeHandler} />
									</div>
								</div>
							</div>

							<div className={style.projects}>
								<div className={style.projects_data}>
									<div className={style.data}>
										<input type="submit" value="Save" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			) : (
				<div className={style.wrapper}>
					<div className={style.left}></div>
					<div className={style.right}>
						<div className={style.info}>
							<div>
								<div className={style.btnclose}>
									<AiOutlineCloseCircle
										style={{ fontSize: "1rem" }}
										onClick={() => {
											cls(false);
											setedit(false);
										}}
									/>
								</div>
								<h3>User details</h3>
							</div>
							<div className={style.info_dat}>
								<div className={style.data}>
									<h4>Full Name</h4>
									<p>{fetchedData.full_name}</p>
								</div>
							</div>
						</div>

						<div className={style.projects}>
							<div className={style.projects_data}>
								<div className={style.data}>
									<h4>Email</h4>
									<p>{fetchedData.email}</p>
								</div>
							</div>
						</div>
						<div className={style.projects}>
							<div className={style.projects_data}>
								<div className={style.data}>
									<h4>Phone number</h4>
									<p>{fetchedData.phone_number}</p>
								</div>
							</div>
						</div>
						<div className={style.projects}>
							<div className={style.projects_data}>
								<div className={style.data}>
									<h4>Role</h4>
									<p>{fetchedData.role}</p>
								</div>
							</div>
						</div>
						<div className={style.projects}>
							<div className={style.projects_data}>
								<div className={style.data}>
									<button
										onClick={() => {
											setedit(true);
										}}
									>
										Edit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
