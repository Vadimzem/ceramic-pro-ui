export const toPrecision = (num: number | string, delimiter?: boolean) => {
	const parts = Number(num).toFixed(2).split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	return delimiter === false ? parts[0] : parts.join(',');
};

export const timeToNumber = (val: string) => Number(val.replace(':', ''));

export const formatDuration = (dur: number): string => {
	if (Number.isNaN(dur)) {
		return '00:00:00';
	}
	const h = Math.floor(dur / 60 / 60);
	const m = Math.floor((dur - h * 60) / 60);
	const s = Math.floor(dur - h * 60 - m * 60);

	return `${h}:`.padStart(3, '0') + `${m}:`.padStart(3, '0') + `${s}`.padStart(2, '0');
};

export const formatNumber = (numb: string): number =>
	Number(numb.replace(/,/g, '.').replace(/\s/g, ''));

export const formatTimeHour = (hour: number): string => {
	if (Number.isNaN(hour)) {
		return '00:00';
	}
	if (hour < 10) {
		return `0${hour}:00`;
	}
	if (hour === 24) {
		return '23:59';
	}
	return `${hour}:00`;
};

export const clearWhiteSpace = (value: string | undefined): string => {
	if (!value) return '';
	return value
		.replace(/(^\s*)/gi, '')
		.replace(/[ ]{2,}/gi, ' ')
		.replace(/[\n]{2,}/gi, '\n')
		.replace(/\n +/, '\n');
};

export const setStringMaxLength = (value: string, length?: number): string => {
	const maxLength = length || 20;
	if (!value) return '';
	if (value.length > maxLength) {
		return `${value.slice(0, maxLength)}...`;
	}
	return value;
};

export const pxToEm = (pxValue: number, base = 16): number => pxValue / base;

export const pxToEmString = (pxValue: number, base = 16): string => `${pxToEm(pxValue, base)}em`;

export const isObjectEqual = (obj1: unknown, obj2: unknown): boolean => JSON.stringify(obj1) === JSON.stringify(obj2);

export const isArraysValuesEqual = (firstArray: Array<unknown>, secondArray: Array<unknown>) => {
	if (firstArray && secondArray) {
		if (firstArray.length !== secondArray.length) {
			return false;
		}
		return firstArray.reduce((res, item) => {
			if (!secondArray.includes(item)) {
				return false;
			}
			return res;
		}, true);
	}
	return false;
};
