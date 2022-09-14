import { CustomButton } from './styles';

type ButtonProps = {
  title: string;
  fontColor?: string;
  backgroundColor?: string;
  marginBottom?: string;
};

export default function Button({
  title,
  fontColor,
  backgroundColor,
  marginBottom,
}: ButtonProps) {
  return (
    <CustomButton
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      marginBottom={marginBottom}
    >
      {title}
    </CustomButton>
  );
}
