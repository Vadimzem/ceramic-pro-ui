import {FunctionComponent, memo, SyntheticEvent, useState} from "react";

export const TextArea: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState('');

	function handleChange(event: SyntheticEvent<HTMLTextAreaElement>) {
		event.preventDefault();
		const val = event.currentTarget.value;
		setInputValue(val);
	}

	return (
		<textarea
			className={'textarea'}
			value={inputValue}
			onChange={handleChange}
		/>
	)
};

export default memo(TextArea);
