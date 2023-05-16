import {FunctionComponent, memo, SyntheticEvent, useState} from "react";
import {ITextField} from "./TextField.interfaces";

export const TextField: FunctionComponent<ITextField> = ({ readOnly, onFocus, onBlur, value }) => {
	const [inputValue, setInputValue] = useState(value || '');

	function handleChange(event: SyntheticEvent<HTMLInputElement>) {
		event.preventDefault();
		const val = event.currentTarget.value;
		setInputValue(val);
	}

	function handleFocus() {
		onFocus?.();
	}

	function handleBlur() {
		onBlur?.();
	}

	return (
		<input
			readOnly={readOnly}
			className={'input'}
			type={'text'}
			value={value || inputValue}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
		/>
	)
};

export default memo(TextField);
