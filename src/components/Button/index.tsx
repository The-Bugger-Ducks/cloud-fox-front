import { CustomButton, Icon } from "./styles";

interface ButtonProps {
	title: string;
	fontColor?: string;
	backgroundColor?: string;
	marginBottom?: string;
	onClick?: () => void;
	icon?: any;
	width?: string;
	height?: string;
}

export default function Button({
	title,
	fontColor,
	backgroundColor,
	marginBottom,
	onClick,
	icon,
	height,
	width,
	...rest
}: ButtonProps) {
	return (
		<CustomButton
			fontColor={fontColor}
			backgroundColor={backgroundColor}
			marginBottom={marginBottom}
			onClick={onClick}
			width={width}
			height={height}
			{...rest}
		>
			{icon && <Icon>{icon}</Icon>}
			{title}
		</CustomButton>
	);
}
