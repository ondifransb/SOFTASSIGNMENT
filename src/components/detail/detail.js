import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../mainpage/style";
import Navbar from "../navbar/navbar";
import { Wrapper2 } from "./style";

const Details = () => {
	const Sdata = useSelector((state) => state.starwars);
	const newdata = Object.keys(Sdata);

	return (
		<Container>
			<Navbar />
			<Wrapper2>
				<ul>
					{newdata.slice(0, 8).map((e, i) => {
						return <li>{Sdata[e]}</li>;
					})}
				</ul>
			</Wrapper2>
		</Container>
	);
};

export default Details;
