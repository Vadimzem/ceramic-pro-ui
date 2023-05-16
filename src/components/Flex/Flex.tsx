import {FunctionComponent, memo, PropsWithChildren} from "react";
import classNames from "classnames";
import {IFlex} from "./Flex.interfaces";

export const Flex: FunctionComponent<PropsWithChildren<IFlex>> = ({
	children,
	flexDirection,
	justifyContent,
	fullHeight,
	alignItems
}) => {

	const computedClasses = classNames(
		'flex',
		{
			'flex--align-items-center': alignItems === 'center',
			'flex--justify-content-center': justifyContent === 'center',
			'flex--justify-content-space-between': justifyContent === 'spaceBetween',
			'flex--justify-content-flex-end': justifyContent === 'flexEnd',
			'flex--justify-content-flex-start': justifyContent === 'flexStart',
			'flex--full-Height': fullHeight,
			'flex--column': flexDirection === 'column',
			'flex--row': flexDirection === 'row',
			'flex--row-reverse': flexDirection === 'rowReverse',
		}
	);

	return (
		<div className={computedClasses}>{children}</div>
	);
};

export default memo(Flex);
