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
	position: relative;

	width: 40%;
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
	overflow-y: auto;
	padding-right: 1.5rem;
`;

export const Title = styled.h1`
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const ParamsTable = styled.div`
	display: grid;
	grid-template-columns: 1.8fr 1fr 1.5fr 1.2fr 1.2fr;
	column-gap: 1em;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	margin: 0 0 0.5rem 0;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ItemLabel = styled.label`
	color: ${({ theme }) => theme.colors.gray};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const Badge = styled.div<{ type: "Verde" | "Amarelo" | "Vermelho" }>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 0.5rem 0;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	border-radius: 5px;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
	font-weight: 400;
	font-size: 13px;

	color: white;
	background: ${({ type }) => (type === "Verde" ? "#34A853" : type === "Amarelo" ? "#FBBC05" : "#EA4335")};
`;

export const ItemTitle = styled.label`
	color: ${({ theme }) => theme.colors.secondary};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const ItemTitleInit = styled.label`
	color: ${({ theme }) => theme.colors.secondary};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const NoItem = styled.div`
	grid-column-start: 1;
	grid-column-start: 5;
`;

export const LabelAlert = styled.label`
	color: ${({ theme }) => theme.colors.gray};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
	margin-bottom: 0.5rem;
`;

export const IconClose = styled.button`
	position: absolute;
	margin: 1.5rem 2rem;
	top: 0;
	right: 0;
	border: none;
	background: transparent;
	cursor: pointer;
`;
