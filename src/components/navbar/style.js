import styled from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0.5rem;

	width: 100%;
	position: absolute;
	left: -50%;
	transform: translateX(50%);

	background-color: black;
	color: white;

	span {
		:hover {
			cursor: pointer;
			color: red;
		}
	}
`;
