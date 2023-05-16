import {FunctionComponent, memo, PropsWithChildren} from "react";
import {IText} from "./Text.interfaces";
import classNames from "classnames";

export const Text: FunctionComponent<PropsWithChildren<IText>> = ({
	children,
	shadow,
	underline,
	bold,
	transform,
	size= 'DEFAULT',
}) => {
	const fontSize = {
		'SIZE12': 'text--size12',
		'SIZE14': 'text--size14',
		'DEFAULT': 'text--default',
		'SIZE18': 'text--size18',
		'SIZE20': 'text--size20',
		'SIZE22': 'text--size22'
	}

	const computedClasses = classNames(
		fontSize[size],
		{
			'text--shadow': shadow,
			'text--underline': underline,
			'text--bold': bold,
			'text--transform--uppercase': transform === 'uppercase',
		}
	);

	return (
		<span className={computedClasses}>{children}</span>
	);
};

export default memo(Text);
