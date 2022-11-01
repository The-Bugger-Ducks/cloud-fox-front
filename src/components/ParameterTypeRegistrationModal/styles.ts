import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
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
	margin: 0 0 1rem 0;
`;

export const Checkbox = styled.input`
	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.white};
	margin: 0 8px 0 0;
`;

export const Label = styled.label`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
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

export const Select = styled.select`
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
	margin-bottom: 1rem;
`;

export const ParamsTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin: 1.5rem 0;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	margin: 0 0 0.5rem 0;
`;

export const ItemLabel = styled.label`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const ItemTitle = styled.label`
	color: ${({ theme }) => theme.colors.secondary};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
	margin: 0 0 0.5rem 0;
`;

export const ItemTitleInit = styled.label`
	color: ${({ theme }) => theme.colors.secondary};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};
	margin: 0 0 0.5rem 1.4rem;
`;

export const NoItem = styled.div`
	grid-column-start: 1;
	grid-column-start: 5;
`;

export const CustomAccordion = styled(Accordion)`
	background-color: ${({ theme }) => theme.colors.white} !important;
	box-shadow: none !important;
`;

export const CustomAccordionSummary = styled(AccordionSummary)`
	padding: 0 !important;
`;

export const CustomAccordionDetails = styled(AccordionDetails)`
	padding: 0 !important;
`;
