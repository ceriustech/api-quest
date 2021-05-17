import React from 'react';

import '../../Styles/CountdownClock/CountdownClock.scss';

const CountdownClock = () => {
	const launchDate = new Date('June 15 2021 23:59:59 GMT-0500 (CST)').getTime();

	const intvl = setInterval(() => {
		//Todays date and time in (ms)
		const now = new Date().getTime();

		//Distance from now to the launch date
		const distance = launchDate - now;

		//Time calculations
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		//Display result
		countdown.innerHTML = ` 
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

		//If lanuch date is passed
		if (distance < 0) {
			//Stop countdown
			clearInterval(intvl);
			//Style and output text
			countdown.style.color = '#fff';
			countdown.innerHTML = 'Launched!';
		}
	}, 1000);

	return (
		<div className="countdown-clock-container">
			<div className="countdown-clock">
				<div className="countdown-clock-placement">
					<p id="timer-days" class="countdown-lock-number"></p>
					<p class="countdown-clock-label">Day</p>
				</div>
				<div className="countdown-clock-placement">
					<p id="timer-hours" class="countdown-lock-number"></p>
					<p class="countdown-clock-label">HR</p>
				</div>
				<div className="countdown-clock-placement">
					<p id="timer-hours" class="countdown-lock-number"></p>
					<p class="countdown-clock-label">MIN</p>
				</div>
				<div className="countdown-clock-placement">
					<p id="timer-hours" class="countdown-lock-number"></p>
					<p class="countdown-clock-label">SEC</p>
				</div>
			</div>
		</div>
	);
};

export default CountdownClock;
