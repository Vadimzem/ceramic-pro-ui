export interface IFlex {
	fullHeight?: boolean,
	justifyContent?: FlexJustifyContentType,
	flexDirection?:  FlexDirectionType,
	alignItems?: 'center',
}

export type FlexJustifyContentType = 'center' | 'spaceBetween' | 'flexEnd' | 'flexStart';
export type FlexDirectionType = 'column' | 'row' | 'rowReverse';
