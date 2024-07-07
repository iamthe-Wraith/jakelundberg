<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	$: console.log(data);
</script>

<div class="container">
    <h1>Library</h1>
</div>

<style>
    .container {
		width: 96%;
		max-width: 50rem;
		margin: 0 auto;
		padding-top: 2rem;
	}
</style>