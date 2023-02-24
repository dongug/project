const t0 = performance.now();

function getTimeFromMinutes(minutes) {
	if (!Number.isInteger(minutes) || minutes < 0) {
		return 'Ошибка, проверьте данные';
	}
  
	const hours = Math.floor(minutes / 60);
	const remainderMinutes = minutes % 60;
  
	const hoursString = getHoursString(hours);
	const minutesString = getMinutesString(remainderMinutes);
  
	return `Это ${hoursString} ${minutesString}`;
}
  
function getHoursString(hours) {
	if (hours === 0) {
		return '0 часов';
	}
  
	const cases = [2, 0, 1, 1, 1, 2];
	const formIndex = hours % 100 > 4 && hours % 100 < 20 ? 2 : cases[Math.min(hours % 10, 5)];
	const form = ['час', 'часа', 'часов'][formIndex];
  
	return `${hours} ${form}`;
}
  
function getMinutesString(minutes) {
	if (minutes === 0) {
		return '0 минут';
	}
  
	const cases = [2, 0, 1, 1, 1, 2];
	const formIndex = minutes % 100 > 4 && minutes % 100 < 20 ? 2 : cases[Math.min(minutes % 10, 5)];
	const form = ['минута', 'минуты', 'минут'][formIndex];
  
	return `${minutes} ${form}`;
}

console.log(getTimeFromMinutes(700));

const t1 = performance.now();

console.log(t1 - t0, 'milliseconds');