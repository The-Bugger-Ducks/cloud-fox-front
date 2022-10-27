import { CustomButton, Icon } from "./styles";

interface ButtonProps {
	title: string;
	fontColor?: string;
	backgroundColor?: string;
	marginBottom?: string;
	onClick?: () => void;
	icon?: any;
	width?: string;
}

export default function Button({
	title,
	fontColor,
	backgroundColor,
	marginBottom,
	onClick,
	icon,
	width,
	...rest
}: ButtonProps) {
	return (
		<CustomButton
			fontColor={fontColor}
			backgroundColor={backgroundColor}
			marginBottom={marginBottom}
			width={width}
			onClick={onClick}
			{...rest}
		>
			{icon && <Icon>{icon}</Icon>}
			{title}
		</CustomButton>
	);
}
