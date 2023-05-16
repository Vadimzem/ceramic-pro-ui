import {FunctionComponent, memo, PropsWithChildren} from "react";
import {IBox} from "./Box.interfaces";
import classNames from "classnames";

export const Box: FunctionComponent<PropsWithChildren<IBox>> = ({ children, radius }) => {

	const cls = classNames('box', {
		'radius--top': radius === 'top',
		'radius--bottom': radius === 'bottom',
	});

	return (
		<div className={cls}>
			{children}
		</div>
	);
};

export default memo(Box);
