// Import Dependencies
import { useContext } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// Import Components
import { UiContext } from "../Ui/UiContext";

// Import React Icons
import { AiOutlineFileText } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

// Import Styles
import style from "./FilePreview.module.css";

export default function FilePreview() {
	const { sOurce, prevState, setprevState } = useContext(UiContext);

	function clsprev() {
		setprevState(false);
	}

	function handleNwOpn(e) {
		e.preventDefault();

		window.open(sOurce.url);
	}

	if (sOurce.type === "pdf") {
		return (
			<div>
				{prevState && (
					<div className={style.container}>
						<div style={{ height: "500px" }}>
							<Viewer fileUrl={sOurce.url} />
						</div>
						<div className={style.btns2}>
							<button onClick={handleNwOpn}>
								<IoMdOpen />
							</button>
							<button>
								<AiFillDelete />
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}

	return (
		<div>
			{prevState && (
				<div className={style.container}>
					<div className={style.headr}>
						<h3>
							<AiOutlineFileText /> File Preview
						</h3>
						<i onClick={clsprev} className={style.clsicn}>
							<GrFormClose style={{ width: "25px", height: "25px" }} />
						</i>
					</div>
					<img src={sOurce.url} alt={sOurce.url} />
					<h4>{sOurce.name}</h4>
					<div className={style.disp}>
						<h5>File Description:</h5>
						<br />
						<p>date : {sOurce.date}</p>
						<br />
						<p>file type : {sOurce.type}</p>
						<br />
						<br />
					</div>
					<div className={style.btns}>
						<button onClick={handleNwOpn}>
							<IoMdOpen />
						</button>
						<button>
							<AiFillDelete />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
