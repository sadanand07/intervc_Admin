// Import Dependencies
import { useEffect, useState } from "react";
import axios from "axios";

// Import Components
import QuickAccessContactList from "../../Components/QuickAccess/ContactList/ContactList";
import MainContentContactDetails from "../../Components/MainContent/ContactDetails/ContactDetails";
import Loading from "../../Components/Loaders/SquareLoader/loading";

// Import Styles
import global from "../Global.module.scss";

// Constants
const List_Url = "https://shivila.herokuapp.com/api/v1/users/all/?role=hr";

export default function Contact() {
	const [isLoading, setLoading] = useState(false);
	const [list, setList] = useState([]);
	const [userSelected, setUserSelected] = useState(0);

	const token = localStorage.getItem("token");

	useEffect(() => {
		async function getContact() {
			setLoading(true);
			await axios
				.get(List_Url, {
					headers: {
						Authorization: "Token " + token,
					},
				})
				.then((res) => {
					setLoading(false);
					console.log(res);
					const { data } = res;
					/* 	 console.log(data); */
					setList(data);
				})
				.catch((err) => {
					setLoading(false);
					console.log(err);
				});
		}

		getContact();
	}, [token]);
	console.log(userSelected);

	return (
		<section className={global.parentContainer}>
			{!isLoading ? (
				<>
					{/* Quick Access */}
					<section className={global.level_2}>
						<QuickAccessContactList list={list} setUserSelected={setUserSelected} />
					</section>

					{/* Main Content */}
					<section className={global.level_3}>
						<MainContentContactDetails userSelected={userSelected} setLoading={setLoading} List_Url={List_Url} />
					</section>
				</>
			) : (
				<Loading />
			)}
		</section>
	);
}
