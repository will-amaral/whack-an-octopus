<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { backInOut } from 'svelte/easing';
	import lottie from 'lottie-web';

	import skins, { randomize } from '$lib/skins';

	let animationData = skins[randomize()];
	let container;
	let up = true;

	const bob = tweened(0, {
		duration: 800,
		easing: backInOut
	});

	onMount(() => {
		const interval = setInterval(() => {
			up = !up;
		}, 2000);
		const instance = lottie.loadAnimation({
			container,
			loop: true,
			autoplay: true,
			animationData
		});
		return () => {
			instance.destroy();
			clearInterval(interval);
		};
	});

	$: $bob = up ? 100 : 0;
</script>

<div class="wrapper">
	<div bind:this={container} style="transform: translate(0%, {$bob}%);" />
	<div class="hole" />
</div>

<style>
	.wrapper {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>
