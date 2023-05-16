export interface IText {
	shadow?: boolean;
	underline?: boolean;
	bold?: boolean;
	transform?: string;
	size?: TextSizes
}

export type TextSizes =
	| 'SIZE12'
	| 'SIZE14'
	| 'DEFAULT'
	| 'SIZE18'
	| 'SIZE20'
	| 'SIZE22'

