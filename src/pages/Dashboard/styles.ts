import styled from "styled-components";

export const Title = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
	font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.colors.gray};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	margin-left: 16rem;
	padding: 3rem;
	height: 100vh;
	overflow-y: scroll;
`;

export const Divider = styled.img`
	margin-right: 0.5rem;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const PageTitle = styled.div`
	height: 1.5rem;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StationName = styled.div`
	height: 1.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const EditButton = styled.img`
	cursor: pointer;
	width: 1.5rem;
	height: 1.5rem;
`;

export const AlertButton = styled.img`
	cursor: pointer;
	width: 2.5rem;
	height: 2.5rem;
`;

export const CardContainer = styled.div`
	padding: 0;
	margin-top: 3rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
`;

export const NewParamContainer = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const LoadingContainer = styled.div`
	grid-column-start: 1;
	grid-column-end: 3;
`;

export const StationInfo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StationInfoContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
