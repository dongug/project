// Место для первой задачи
function getTimeFromMinutes(minutes) {
	if (typeof(minutes) != 'number' || minutes < 0 || !Number.isInteger(minutes)) {
		return 'Ошибка, проверьте данные';
	}
	const hours = Math.floor(minutes / 60);
	const remainder = minutes % 60;

	let hoursDescription,
		remainderDescription;

	if (hours % 10 === 1) {
		hoursDescription = 'час';
	} else if (hours % 10 >= 2 && hours % 10 <= 4 && (hours < 12 || hours > 14)) {
		hoursDescription = 'часа';
	} else {
		hoursDescription = 'часов';
	}
	if (remainder % 10 === 1) {
		remainderDescription = 'минута';
	} else if (remainder % 10 >= 2 && remainder % 10 <= 4 && (remainder < 12 || remainder > 14)) {
		remainderDescription = 'минуты';
	} else {
		remainderDescription = 'минут';
	}
	return `Это ${hours} ${hoursDescription} и ${remainder} ${remainderDescription} `;
}

// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
	if (typeof(num1) != 'number' || typeof(num2) != 'number' || typeof(num3) != 'number' || typeof(num4) != 'number') {
		return 0;
	}
	if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
		return num1;
	} else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
		return num2;
	} else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
		return num3;
	} else {
		return num4;
	}
}
