import {FunctionComponent, memo} from "react";
import {IImg} from "./Img.interfaces";

export const Img: FunctionComponent<IImg> = ({ width, height, src, alt }) => {

	return (
		<img width={width} height={height} src={src} alt={alt} />
	);
};

export default memo(Img);
