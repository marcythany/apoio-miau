/**
 * Retorna a idade em anos e meses, com base na data de nascimento fornecida e na data atual.
 *
 * @param birthDate A data de nascimento do gato.
 * @returns Uma string representando a idade em anos e meses.
 */
export const calcularIdade = (birthDate: Date): string => {
	const currentDate = new Date();
	const ageInMonths =
		(currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
		(currentDate.getMonth() - birthDate.getMonth());

	const years = Math.floor(ageInMonths / 12);
	const months = ageInMonths % 12;

	if (years === 0) {
		return `${months} meses`;
	} else if (years === 1 && months === 0) {
		return `${years} ano`;
	} else if (years === 1 && months > 0) {
		return `${years} ano e ${months} meses`;
	} else if (years > 1 && months === 0) {
		return `${years} anos`;
	} else {
		return `${years} anos e ${months} meses`;
	}
};
