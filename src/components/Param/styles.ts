import styled from "styled-components";

export const ParamComponent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	border-width: 0px;
	background-color: ${({ theme }) => theme.colors.secondary};
	height: 2.25rem;
	text-align: center;
	padding: 1rem;
	text-align: center;
`;

export const Label = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
	text-align: center;
`;

export const Icon = styled.img`
	width: 10px;
	height: 16px;
	margin-left: 0.5rem;
	cursor: pointer;
`;
