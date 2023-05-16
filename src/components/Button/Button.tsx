import {FunctionComponent, memo} from "react";
import {IButton} from "./Button.interfaces";

export const Button: FunctionComponent<IButton> = ({ type = 'button', text }) => {
	return (
		<button className={'button'} type={'button'}>
			<span>{ text }</span>
			<i className={'button__animated'} />
		</button>
	)
};

export default memo(Button);
