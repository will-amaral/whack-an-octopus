<script>
	import Octo from '$lib/Octo.svelte';
</script>

<svelte:head>
	<title>Whack-an-Octopus</title>
</svelte:head>
<h1>Whack-an-Octopus</h1>
<div class="grid">
	<Octo />
	<Octo />
	<Octo />
	<Octo />
	<Octo />
</div>

<style>
	.grid {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(3, 30vmin);
		grid-template-rows: repeat(2, 30vmin);
		align-items: center;
	}

	.grid > :global(*:nth-child(4):nth-last-child(1)),
	.grid > :global(*:nth-child(4):nth-last-child(2)),
	.grid > :global(*:nth-child(5):nth-last-child(1)),
	.grid > :global(*:nth-child(7):nth-last-child(1)),
	.grid > :global(*:nth-child(7):nth-last-child(2)),
	.grid > :global(*:nth-child(8):nth-last-child(1)) {
		transform: translate(50%, 0);
	}
</style>
