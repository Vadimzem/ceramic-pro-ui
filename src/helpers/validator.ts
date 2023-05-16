export const isPhoneNumber = (phoneNumber: string) => {
	const regex = /7[3489]\d{9}/;
	const phoneNormalize = phoneNumber.replace(/[^+\d]+/g, '');
	return regex.test(phoneNormalize);
};
