<script lang="ts">
	export let weapon1_id: string;
	import {WeaponDTO} from './weapon';

	let weapons1: WeaponDTO[] = [];

	import {weapons} from './weapons';
	import Weapon from './Weapon.svelte';

	$: {
		console.log(`***`, weapon1_id);
		weapons1 = weapons.filter((x) => x.id.indexOf(weapon1_id)>=0);
		console.log(`---`, weapons1);
	}
</script>

<main>
	<h1>Hello a friend High Elf!</h1>

	<p>Choose the first weapon here. Start typing.</p>
	<input bind:value={weapon1_id}>

	{#each weapons1 as weapon1}
	<Weapon weapon={weapon1} />
	{/each}
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