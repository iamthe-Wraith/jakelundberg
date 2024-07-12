<script lang="ts">
    import { page } from '$app/stores';
    import { v4 as uuidv4 } from 'uuid';
    import * as THREE from 'three';
    import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
    import { assets } from '$lib/stores/assets';
	import { primary500HexColor, tertiary100HexColor } from '$lib/constants/colors';
	import { onMount } from 'svelte';
	
    interface ITombstoneConfig {
        asset: 'tombstone-1' | 'tombstone-2' | 'tombstone-3' | 'tombstone-4';
        rotation: number;
        camera: {
            position: THREE.Vector3;
            lookAtHeight: number;
        },
        light1: {
            position: THREE.Vector3;
        },
        light2: {
            position: THREE.Vector3;
        },
        text: {
            rotation: number;
            top: string;
            left: string;
        }
    }

    export let id = uuidv4();
    export let variant: number = 1;

    const configs: ITombstoneConfig[] = [
        {
            asset: 'tombstone-1',
            rotation: 14,
            camera: {
                position: new THREE.Vector3(0, 1.05, 1),
                lookAtHeight: 0.55,
            },
            light1: {
                position: new THREE.Vector3(0.75, 2.75, 1),
            },
            light2: {
                position: new THREE.Vector3(0.75, 2.75, 1),
            },
            text: {
                rotation: 35,
                top: '45%',
                left: '50%',
            }
        },
        {
            asset: 'tombstone-2', 
            rotation: -11.2,
            camera: {
                position: new THREE.Vector3(0, 0.95, 0.7),
                lookAtHeight: 0.55,
            },
            light1: {
                position: new THREE.Vector3(-0.5, 2.75, 0.9),
            },
            light2: {
                position: new THREE.Vector3(-0.5, 4, 1),
            },
            text: {
                rotation: -11,
                top: '50%',
                left: '47%',
            }
        },
        {
            asset: 'tombstone-4', 
            rotation: 17,
            camera: {
                position: new THREE.Vector3(0, 1.15, 1),
                lookAtHeight: 0.7,
            },
            light1: {
                position: new THREE.Vector3(0.75, 3.25, 1.05),
            },
            light2: {
                position: new THREE.Vector3(0.75, 2.75, 1),
            },
            text: {
                rotation: 24,
                top: '39%',
                left: '53%',
            }
        },
        { 
            asset: 'tombstone-3', 
            rotation: -11,
            camera: {
                position: new THREE.Vector3(0, 0.8, 0.9),
                lookAtHeight: 0.55,
            },
            light1: {
                position: new THREE.Vector3(0.75, 2.75, 1.2),
            },
            light2: {
                position: new THREE.Vector3(0.75, 2.75, 1),
            },
            text: {
                rotation: -40,
                top: '40%',
                left: '53%',
            }
        },
    ];

    let loadError = '';
    let loaded = false;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let light: THREE.PointLight;
	let light2: THREE.RectAreaLight;

    let mounted = false;

    const config = configs[variant - 1];

    $: {
        if ($assets.outdoor) {
            if ($assets.outdoor.error) {
                loadError = $assets.outdoor.error;
            } else if($assets.outdoor.load?.complete && $assets.outdoor.meshes['tombstone-1'] && !loaded && mounted) {
                init();
            }
        }
    }

    onMount(() => {
        mounted = true;
    });

    const init = () => {
		const container = document.querySelector(`#tombstone-${id}-container`) as HTMLCanvasElement;
		const rect = container.getBoundingClientRect();
		scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x030303, 7, 17);

        camera = new THREE.PerspectiveCamera(70 , (rect.width / rect.height), 0.1, 1000);
        camera.position.set(
            config.camera.position.x,
            config.camera.position.y,
            config.camera.position.z,
        );

		renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			precision: 'mediump',
			canvas: document.getElementById(id) as HTMLCanvasElement,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(rect.width, rect.height);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		RectAreaLightUniformsLib.init();

		light = new THREE.PointLight(primary500HexColor, 300, 15);
		light.position.set(
            config.light1.position.x,
            config.light1.position.y,
            config.light1.position.z,
        );
		light.castShadow = true;
		light.shadow!.bias = -0.0004;
		light.shadow.mapSize.width = 2048;
		light.shadow.mapSize.height = 2048;
		light.shadow.camera.near = 0.1;
		light.shadow.camera.far = 10000;
		light.power = 1000;
		scene.add(light);

		const light2Instensity = $page.data.device.isMobile ? 0.6 : 0.4;
		light2 = new THREE.RectAreaLight(tertiary100HexColor, light2Instensity, 100, 100);
		light2.position.set(
            config.light2.position.x,
            config.light2.position.y,
            config.light2.position.z,
        );
		light2.lookAt(new THREE.Vector3(0, 0, 1));
		scene.add(light2);

		const ambientLight = new THREE.AmbientLight(0x548277, 0.2);
		scene.add(ambientLight);

        const anchor = new THREE.Object3D();
        anchor.position.set(0, 0, 0);
        const tombstone = $assets.outdoor.meshes[config.asset]!.clone() as THREE.Group;
        tombstone.position.set(0, 0, 0);
        tombstone.rotateY(THREE.MathUtils.degToRad(config.rotation));
        anchor.add(tombstone);
        scene.add(anchor);

        const lookAtTarget = anchor.position.clone();
        lookAtTarget.y = config.camera.lookAtHeight;
        camera.lookAt(lookAtTarget);

        render();

		loaded = true;
	}

	function render() {
		renderer.render(scene, camera);
	}
</script>

<div id="tombstone-{id}-container" class="tombstone-container">
    {#if $assets.outdoor.error}
        <div class="load-error">
            <p>That's odd...I could have sworn there was a tombstone here...</p>
        </div>
    {:else}
        <canvas {id}></canvas>

        {#if $assets.outdoor.load?.complete}
            <div
                class="tombstone-text"
                style="--tombstone-text-rotation: {config.text.rotation}deg; --tombstone-text-top: {config.text.top}; --tombstone-text-left: {config.text.left};"
            >
                <slot></slot>
            </div>
        {:else}
            <div class="loading">
                <p>Loading tombstone...</p>
            </div>
        {/if}
    {/if}
</div>

<style>
    .tombstone-container {
        container-type: inline-size;
        container-name: tombstone;
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 800px;
    }

    canvas {
        width: 100%;
        height: 100%;
    }

    .tombstone-text {
        --tombstone-text-top: 50%;
        --tombstone-text-left: 50%;
        --tombstone-text-rotation: 0;

        position: absolute;
        top: var(--tombstone-text-top);
        left: var(--tombstone-text-left);
        width: 100%;
        font-size: 0.75rem;
        color: var(--primary-900);
        transform: translate3d(-50%, -50%, 0) rotate3d(0, 1, -0.2, var(--tombstone-text-rotation));
        text-align: center;
    }

    .load-error,
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 1rem;

        & p {
            margin: 0;
            color: var(--neutral-500);
        }
    }

    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    @container tombstone (min-width: 20rem) {
        .tombstone-text {
            font-size: 1rem;
        }
    }
</style>