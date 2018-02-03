var day, hour, minute, second, clock;

function cloky () {
	day = new Date();
	hour = day.getHours();
	minute = day.getMinutes();
	second = day.getSeconds();



if (hour <= 9) {
	hour = '0' + hour;
}

if (minute <= 9) {
	minute = '0' + minute;
}

if (second <= 9) {
	second = '0' + second;
}

clock = hour + ":" + minute + ":" + second;

document.getElementById("clock").innerHTML = clock;

setTimeout(cloky, 1000);

}

cloky();

