// time

const timeCount = setInterval(function() {
	const teks = document.getElementById('teks');
	const dayGoal = new Date('Mar 16, 2021 08:18:00').getTime();
	const today = new Date().getTime();
	const time = dayGoal - today;

	const day = Math.floor(time / (1000 * 60 * 60 * 24));
	const hour = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); 
	const minute = Math.floor(time % (1000 * 60 * 60) / (1000 * 60)); 
	const second = Math.floor(time % (1000 * 60) / 1000);

	teks.innerHTML = 'Tunggu sebentar yaa, tunggu sampai ' + day + ' hari ' + hour + ' jam ' + minute + ' menit ' + second + ' detik lagi okay!';

	if(time <= 0){
		clearInterval(timeCount);
		teks.innerHTML = 'SELAMAT ULANG TAHUN';
	}

}, 1000);