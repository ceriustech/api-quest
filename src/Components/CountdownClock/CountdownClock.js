import React, { useEffect, useState } from 'react';

import '../../Styles/CountdownClock/CountdownClock.scss';

const CountdownClock = () => {
	const calculateTimeLeft = () => {
		const launchDate = new Date(
			'July 15 2021 23:59:59 GMT-0500 (CST)'
		).getTime();

		const now = new Date().getTime();

		const distance = launchDate - now;

		let timeLeft = {};

		if (distance > 0) {
			timeLeft = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((distance / 1000 / 60) % 60),
				seconds: Math.floor((distance / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	return (
		<div className="countdown-clock-container">
			{calculateTimeLeft !== 0 ? (
				<div className="countdown-clock">
					<div className="countdown-clock-placement">
						<p id="timer-days" className="countdown-lock-number">
							{timeLeft.days}
							<span>:</span>
						</p>
						<p className="countdown-clock-label">Day</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" className="countdown-lock-number">
							{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}
							<span>:</span>
						</p>
						<p className="countdown-clock-label">HR</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" className="countdown-lock-number">
							{timeLeft.minutes < 10
								? '0' + timeLeft.minutes
								: timeLeft.minutes}
							<span>:</span>
						</p>
						<p className="countdown-clock-label">MIN</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" className="countdown-lock-number">
							{timeLeft.seconds < 10
								? '0' + timeLeft.seconds
								: timeLeft.seconds}
						</p>
						<p className="countdown-clock-label">SEC</p>
					</div>
				</div>
			) : (
				<p className="countdown-clock-launched">Launched</p>
			)}
		</div>
	);
};

export default CountdownClock;
