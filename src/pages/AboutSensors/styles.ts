import styled from "styled-components";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	margin-left: 16rem;
	padding: 3rem;
	height: 100vh;
	overflow-y: scroll;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
	font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const SensorName = styled.h4`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
	font-size: ${({ theme }) => theme.fontSizes.subtitle};

	margin-bottom: 0.5rem;
`;

export const Text = styled.p`
	padding: 0;
	color: ${({ theme }) => theme.colors.gray};
	font-weight: ${({ theme }) => theme.fontWeights.light};
	font-size: 0.879rem;
	line-height: 170%;

	margin-top: 0.4rem;
`;

export const BoldText = styled.span`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: 0.879rem;
`;

export const VarText = styled.var`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	font-size: 0.879rem;
	font-style: italic;
`;

export const SensorContainer = styled.div`
	padding: 0;
	padding-right: 5rem;
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

export const SensorSection = styled.section`
	width: 80%;
`;

export const ImageSensor = styled.img`
	margin-top: 1rem;

	height: 125px;
	width: auto;
	max-width: 200px;
`;

export const ImageTableSensor = styled.img`
	margin-top: 1rem;
`;

export const Row = styled.div`
	margin-top: 0.5rem;
	display: flex;
	flex-direction: row;
	gap: 3rem
`
