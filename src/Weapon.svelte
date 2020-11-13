<script lang="ts">
    import {WeaponDTO} from './weapon';

    export let weapon: WeaponDTO;
</script>

<h1>{weapon.id}</h1>

<strong>Attack strenght</strong>
{weapon.dmg}


<strong>Speed</strong>
{weapon.speed}

<strong>Reach</strong>
{weapon.reach}

<strong>Knockback bonus</strong>
{weapon.kb}