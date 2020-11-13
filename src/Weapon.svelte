<script lang="ts">
    import {WeaponDTO} from './weapon';

    export let weapon: WeaponDTO;
</script>

<h1>{weapon.id}</h1>

<br>

<strong>Attack strenght</strong>
{weapon.dmg}



