import { ParamComponent, Icon, Label } from "./styles";
import { CloseIcon } from "../../assets/icons/index";

interface ParamComponentProps {
	name: string;
	onClick?: () => void;
}

export default function Param({ name, onClick }: ParamComponentProps) {
	return (
		<ParamComponent>
			<Label>{name}</Label>
			<Icon title="Remover parâmetro" src={CloseIcon} alt="Remover parâmetro" onClick={onClick} />
		</ParamComponent>
	);
}
