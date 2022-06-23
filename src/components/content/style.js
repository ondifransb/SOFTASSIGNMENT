import styled from "styled-components";
import { Wrapper } from "../mainpage/style";

export const Container = styled.div`
	margin: 0;
	box-sizing: border-box;
	padding: 0;

	width: clamp(320px, 100vw, 1920px);
	height: 100vh;
	background-color: black;

	overflow: hidden;
`;

export const Wrapper2 = styled(Wrapper)`
	/* background-color: red; */
	margin: 0;
	padding: 5% 0.5rem;

	justify-content: space-around;

	button {
		width: 20%;
		height: 10%;

		border: 1px solid white;
	}
`;
