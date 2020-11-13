<script lang="ts">
	export let weapon1_id: string;
	import {WeaponDTO} from './weapon';
	import {normalizeSync} from 'normalize-diacritics';

	let weapons1: WeaponDTO[] = [];

	import {weapons} from './weapons';
	import Weapon from './Weapon.svelte';

	$: {
		if (weapon1_id) {
			const w1 = normalizeSync(weapon1_id);
			weapons1 = weapons.filter((x) => x.id_normalized.indexOf(w1)>=0);
		}
	}
</script>

<div class="lg:container lg:mx-auto">
	

	<h1>Hello a friend High Elf!</h1>

	<p>Choose the first weapon here. Start typing.</p>
	<input bind:value={weapon1_id} />

	{#each weapons1 as weapon1}
	<Weapon weapon={weapon1} />
	{/each}

</div>


<style>
</style>