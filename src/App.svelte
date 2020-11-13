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
			const w1_parts = w1.split(' ');
			weapons1 = weapons.filter(
				(x) => w1_parts.every((y) => x.id_normalized.indexOf(y)>=0)
			);
		}
	}
</script>

<div class="lg:container lg:mx-auto">

	<h1>Hello a friend High Elf!</h1>

	<div class="flex flex-row bg-gray-200">
		<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">

			<div class="flex flex-col bg-gray-200">
				<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
					<div class="flex flex-row bg-gray-200">
						<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Choose the first weapon here. Start typing.</div>
						<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"><input bind:value={weapon1_id} /></div>
					</div>
				</div>
				<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
					{#each weapons1 as weapon1}
					<Weapon weapon={weapon1} />
					{/each}
				</div>
			  </div>

		</div>
		<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">


			2222
		</div>
	  </div>




	

</div>


<style>
</style>