<script lang="ts">
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { assets } from '$lib/stores/assets';
	import { assets as assetsPath } from '$app/paths';
    import Tombstone from "$lib/components/Tombstone.svelte";
	import { onMount } from 'svelte';

    onMount(() => {
		loadAssets()
			.then();
	})

	function loadAssets(): Promise<void> {
		return new Promise((resolve, reject) => {
			new GLTFLoader().load(
				`${assetsPath}/manor-assets.glb`,
				(gltf) => {
					assets.setAssets('outdoor', gltf.scene.children);
					resolve();
				},
				(xhr) => assets.loading('outdoor', xhr.loaded, xhr.total),
				(error) => {
					assets.error('outdoor', (error as Error).message);
					reject(error);
				},
			);
		});
	}
</script>

<div class="container">
    <div class="tombstone-wrapper">
        <Tombstone>
            Oct 2023 - Oct 2023
        </Tombstone>
    </div>

    <div class="tombstone-wrapper">
        <Tombstone variant={2}>
            Oct 2023 - Oct 2023
        </Tombstone>
    </div>

    <div class="tombstone-wrapper">
        <Tombstone variant={3}>
            Oct 2023 - Oct 2023
        </Tombstone>
    </div>

    <div class="tombstone-wrapper">
        <Tombstone variant={4}>
            Oct 2023 - Oct 2023
        </Tombstone>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
    }

    .tombstone-wrapper {
        width: 20rem;
        height: 20rem;
    }
</style>