import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FetchData } from "../../redux/actions";

import { Container, Wrapper2 } from "./style";
import Navbar from "../navbar/navbar";

function Content() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(FetchData());
		console.log("wkwkwk");
	});
	return (
		<Container>
			<Navbar />
			<Wrapper2>
				<button onClick={() => navigate("/details")}>C-3PO</button>
				<button onClick={() => navigate("/details")}>Luke Skywalker</button>
				<button onClick={() => navigate("/details")}>Leia Organa</button>
				<button onClick={() => navigate("/details")}>R2-D2</button>
				<button onClick={() => navigate("/details")}>Obi-Wan Kenobi</button>
			</Wrapper2>
		</Container>
	);
}

export default Content;
