export interface ITextField {
	value?: string;
	readOnly?: boolean;
	onFocus?: () => void;
	onBlur?: () => void;
}
