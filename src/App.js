// Import Dependencies
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import { AuthenticationAction } from "./ReduxStore/Actions/AuthenticationAction";

// Import Components
import { Navigation } from "./Navigation/Naviagation";
import { UiContext } from "./Components/FileManage/Components/Ui/UiContext";

export default function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { authenticated, isLoading } = auth;
	const [nvOpn, setnvOpn] = useState(false);
	const [sOurce, setsOurce] = useState([]);
	const [prevState, setprevState] = useState(false);

	useEffect(() => {
		dispatch(AuthenticationAction());
	}, [dispatch]);

	return (
		<UiContext.Provider value={{ nvOpn, setnvOpn, sOurce, setsOurce, prevState, setprevState }}>
			<section className="App">
				<Navigation authenticated={authenticated} isLoading={isLoading} />
			</section>
		</UiContext.Provider>
	);
}
