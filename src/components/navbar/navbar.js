import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<span
				onClick={() => {
					navigate("/");
				}}
			>
				Home
			</span>
		</Container>
	);
};

export default Navbar;
