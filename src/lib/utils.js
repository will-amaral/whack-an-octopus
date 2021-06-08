export const createLoop = (
	options = {
		onStart: () => null,
		onRepeat: () => null
	}
) => {
	let interval;
	const { onStart, onRepeat } = options;

	const repeat = (speed) => {
		interval = setInterval(onRepeat, 2000 / speed);
	};

	const start = () => {
		setTimeout(() => {
			onStart();
			repeat(1);
		}, randomize(10) * 500);
	};

	const stop = () => clearInterval(interval);

	const resume = (speed = 1) => {
		setTimeout(repeat, randomize(speed) * 500, speed);
	};

	return {
		start,
		stop,
		resume
	};
};

export const randomize = (factor = 10) => Math.floor(Math.random() * factor + 1);
