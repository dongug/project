// Место для первой задачи
function calculateVolumeAndArea(a) {
	if (typeof(a) != 'number' || a <= 0 || parseInt(a) != a) {
		return 'При вычислении произошла ошибка';
	}
	const cubeVolume = a * a * a;
	const cubeSurface = a * a * 6;
	return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeSurface}`;
}

// Место для второй задачи
function getCoupeNumber(num) {
	if (typeof(num) != 'number' || num < 0 || parseInt(num) != num) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else if (num == 0 || num > 36) {
		return 'Таких мест в вагоне не существует';
	} else {
		return Math.ceil(num / 4);
	}
}
calculateVolumeAndArea();
getCoupeNumber();