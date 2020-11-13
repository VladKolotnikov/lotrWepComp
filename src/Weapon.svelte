<script lang="ts">
    import {WeaponDTO} from './weapon';

    export let weapon: WeaponDTO;
</script>


<div class="flex flex-col bg-gray-200">
    <div class="text-gray-700 text-center bg-green-200 px-4 py-2 m-2"><h1>{weapon.id}</h1></div>
    <div class="text-gray-700 text-center bg-teal-200 px-4 py-2 m-2"><strong>Attack strenght</strong>
        {weapon.dmg}</div>
    <div class="text-gray-700 text-center bg-blue-200 px-4 py-2 m-2"><strong>Speed</strong>
        {weapon.speed}</div>

        <div class="text-gray-700 text-center bg-indigo-200 px-4 py-2 m-2">

            <strong>Reach</strong>
            {weapon.reach}</div>

            <div class="text-gray-700 text-center bg-purple-200 px-4 py-2 m-2">

                

<strong>Knockback bonus</strong>
{weapon.kb}</div>
  </div>






