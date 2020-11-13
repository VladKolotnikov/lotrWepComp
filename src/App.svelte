<script lang="ts">
	export let weapon1_id: string;
	export let weapon2_id: string;
	import {WeaponDTO} from './weapon';
	import {normalizeSync} from 'normalize-diacritics';

	let weapons1: WeaponDTO[] = [];
	let weapons2: WeaponDTO[] = [];

	import {weapons} from './weapons';
	import Weapon from './Weapon.svelte';

   const recalculate = (input) => {
	 if (!input) return [];
	 
	 const w1 = normalizeSync(input);
	const w1_parts = w1.split(' ');
	return weapons.filter(
		(x) => w1_parts.every((y) => x.id_normalized.indexOf(y)>=0)
	);	 
   }

	$: {
		weapons1 = recalculate(weapon1_id);
		weapons2 = recalculate(weapon2_id);
	}
</script>

<div class="lg:container lg:mx-auto">

	<h1>Hello a friend High Elf! Compare the weapons here:</h1>

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


			<div class="flex flex-col bg-gray-200">
				<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
					<div class="flex flex-row bg-gray-200">
						<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Choose the second weapon here. Start typing.</div>
						<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"><input bind:value={weapon2_id} /></div>
					</div>
				</div>
				<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
					{#each weapons2 as weapon2}
					<Weapon weapon={weapon2} />
					{/each}
				</div>
			  </div>


		</div>
	  </div>




	

</div>


<style>
</style>