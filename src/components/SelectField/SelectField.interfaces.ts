export interface ISelectField {
	onChange?: (selectValue: string | number) => void;
	data: Array<any>;
}
