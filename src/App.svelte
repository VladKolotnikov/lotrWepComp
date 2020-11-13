<script lang="ts">
	export let weapon1_id: string;

	import {weapons} from './weapons';

	$: weapons1 = weapons.
</script>

<main>
	<h1>Hello a friend High Elf!</h1>

	<input bind:value={weapon1_id}>



</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>