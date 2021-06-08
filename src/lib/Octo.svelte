<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { expoInOut } from 'svelte/easing';
	import lottie from 'lottie-web';

	import skins from '$lib/skins';
	import { createLoop, randomize } from '$lib/utils';

	export let onWhack = (points) => console.log('Points: ', points);

	let animationData = skins[randomize(2)];
	let container;
	let speed = 100;
	let points = 100;

	const bob = tweened(100, {
		duration: 800,
		easing: expoInOut
	});

	const loop = createLoop({
		onStart: () => {
			$bob = 0;
		},
		onRepeat: () => {
			if ($bob === 100) {
				$bob = 0;
				points = Math.floor(Math.max(points * 0.9, 1));
			} else if ($bob === 0) {
				$bob = 100;
			}
		}
	});

	const onClick = () => {
		// Send points, set octo position and stop loop
		loop.stop();
		bob.set(100, { duration: 200 });
		onWhack(points);
		// Reset points, increase speed and restart loop
		points = 100;
		speed++;
		loop.resume(speed);
	};

	onMount(() => {
		loop.start(speed);
		const instance = lottie.loadAnimation({
			container,
			loop: true,
			autoplay: true,
			animationData
		});
		return () => {
			instance.destroy();
			loop.stop();
		};
	});
</script>

<div class="wrapper">
	<div bind:this={container} style="transform: translate(0%, {$bob}%);" on:click={onClick} />
	<div class="hole" />
</div>

<style>
	.wrapper {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.hole {
		width: 100%;
		height: 10%;
		background-color: #302b63;
		border: 3px solid #0f0c29;
		margin-top: -11.5%;
		border-radius: 50%;
	}
</style>
