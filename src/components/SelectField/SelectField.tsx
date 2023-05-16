import {FunctionComponent, memo, useState} from "react";
import {TextField} from "../TextField/TextField";
import {ISelectField} from "./SelectField.interfaces";

export const SelectField: FunctionComponent<ISelectField> = ({ onChange, data }) => {
	const [selectValue, setSelectValue] = useState('');

	function handleChange(option: any) {
		const val = option.name;
		onChange?.(val);
		setSelectValue(val);
	}

	const renderOptions = () => {
		if (!data.length) return null;
		return (
			<div className={'select--option--wrapper'}>
				{data.map((option: any) => (
					<div onClick={() => handleChange(option)} className={'select--option--item'}>
						{option.name}
					</div>
				))}
			</div>
		)
	};

	return (
		<div className={'select'}>
			<TextField value={selectValue} readOnly />
			{renderOptions()}
		</div>
	)
};

export default memo(SelectField);
