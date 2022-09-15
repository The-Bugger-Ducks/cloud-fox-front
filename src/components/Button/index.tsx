import { CustomButton, Icon } from './styles';

type ButtonProps = {
  title: string;
  fontColor?: string;
  backgroundColor?: string;
  marginBottom?: string;
  onClick?: () => void;
  icon?: any;
};

export default function Button({
  title,
  fontColor,
  backgroundColor,
  marginBottom,
  onClick,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <CustomButton
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      marginBottom={marginBottom}
      onClick={onClick}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      {title}
    </CustomButton>
  );
}
