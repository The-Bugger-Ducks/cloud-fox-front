import styled from "styled-components";

interface ContainerProps {
	disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
	background: rgba(30, 27, 25, 0.54);
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 5000 !important;

	display: ${({ disabled }) => (disabled ? "none" : "flex")};

	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Body = styled.div`
	background: ${({ theme }) => theme.colors.white};
	border-radius: 1rem;

	width: 40%;
	height: 80%;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	overflow-y: scroll;
	padding-right: 1.5rem;
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
	width: 100%;
	margin-top: 3rem;
`;

export const Title = styled.h1`
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const Questions = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Label = styled.label`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.text};
	margin-bottom: 0.5rem;
`;

export const Input = styled.input`
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
	margin-bottom: 1rem;
`;
