import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	margin: 0;
	box-sizing: border-box;
	padding: 0;

	width: clamp(320px, 100vw, 1920px);
	height: 100vh;
	background-color: black;

	overflow: hidden;
`;

const spanAnimation = keyframes`
0%{
	color: white
}
50%{
	color: red;
}
100%{
	color: white;
}
`;

export const Wrapper = styled.div`
	margin: 0;
	box-sizing: border-box;

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		color: white;
		font-weight: bolder;

		span {
			color: white;
			animation: ${spanAnimation} 1s ease-out infinite;
		}
	}

	button {
		width: 100px;
		height: 40px;

		border-radius: 10px;
		background-color: transparent;

		color: white;
		font-weight: bold;

		transition: 0.2s ease-out;

		:hover {
			cursor: pointer;

			background-color: red;
		}
		/* all: unset; */
	}
`;
