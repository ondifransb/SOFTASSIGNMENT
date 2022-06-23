import React from "react";
import { Container, Wrapper } from "./style";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";

function Mainpage() {
	const navigate = useNavigate();
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<h1>
					ARE YOU A <span>STARWARS</span> GEEK?
				</h1>
				<div>
					<button
						onClick={() => {
							navigate("/content");
						}}
					>
						HELL YES
					</button>
					<button
						onClick={() => {
							navigate("/content");
						}}
					>
						YES
					</button>
				</div>
			</Wrapper>
		</Container>
	);
}

export default Mainpage;
