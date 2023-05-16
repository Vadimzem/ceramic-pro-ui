import {FunctionComponent, memo} from "react";
import {ILink} from "./Link.interfaces";

export const Link: FunctionComponent<ILink> = ({ to, text, target }) => {

	return (
		<a
			target={target}
			href={to}
		>
			{text}
		</a>
	)
};

export default memo(Link);
