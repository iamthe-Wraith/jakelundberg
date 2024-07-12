<script lang="ts">
    import { onMount } from "svelte";
    import { blur } from "svelte/transition";
    import type { Action } from 'svelte/action';
    import { v4 as uuidv4 } from 'uuid';
    import { inview } from 'svelte-inview';

    type BugzIs = 'waving' |
        'pointing-right' |
        'pointing-left' |
        'doing-nothing' |
        'giggling' |
        'looking-shy' |
        'alarmed'; // good to use with errors

    export let id: string = uuidv4();
    export let is: BugzIs = 'waving';

    let imgRef: HTMLImageElement;
    let src: string;
    let alt: string;
    let isInView: boolean;
	let inViewOptions = {
        threshold: 1,
    };

    onMount(() => {
        switch (is) {
            case 'waving':
                src = 'https://res.cloudinary.com/dxpwpno1e/image/upload/v1718376369/bugs-hi-square_uxkso5.png';
                alt = 'A cute cartoon wraith with big, innocent eyes and a red cloak waving at the viewer.';
                break;
            case 'pointing-right':
                src = '#';
                alt = 'A cute cartoon wraith with big, innocent eyes and a red cloak pointing to his right.';
                break;
            case 'pointing-left':
                src = '#';
                alt = 'A cute cartoon wraith with big, innocent eyes and a red cloak pointing to his left.';
                break;
            case 'doing-nothing':
                src = '#';
                alt = 'A cute cartoon wraith with big, innocent eyes and a red cloak just standing there.';
                break;
            case 'giggling':
                src = '#';
                alt = 'A cute cartoon wraith with big, innocent eyes and a red cloak giggling.';
                break;
            case 'looking-shy':
                src = '#';
                alt = 'A cute cartoon wraith with big, innocent eyes and a red cloak looking shy.';
                break;
        }       
    });

    const onLoadError = () => {
        imgRef.classList.add('load-error');
    };

    const onViewChange = ({ detail }: CustomEvent) => {
        isInView = detail.inView;
    }
</script>

<div
    use:inview={inViewOptions}
    on:inview_change={onViewChange}
    class="bugz"
    {id}
>
    {#if isInView}
        <img
            bind:this={imgRef}
            on:error={onLoadError}
            in:blur={{ amount: 10, duration: 800, delay: 200 }}
            out:blur={{ amount: 10, duration: 600, delay: 0 }}
            {src}
            {alt}
        />
    {:else}
        <div class="bugz-placeholder" />
    {/if}
</div>

<style>
    @keyframes float {
        0% {
            transform: translate(-50%, -50%);
        }
        50% {
            transform: translate(-50%, calc(-50% + -10px));
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }

    .bugz {
        --bugz-size: 8rem;
        max-width: var(--bugz-size);
        width: var(--bugz-size);
        min-width: var(--bugz-size);
        aspect-ratio: 1/1;
        position: relative;

        @media (min-width: 620px) {
            --bugz-size: 10rem;
        }

        @media (min-width: 768px) {
            --bugz-size: 12rem;
        }
    }

    img,
    .bugz-placeholder {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        max-width: 100%;
        width: 100%;
        min-width: 100%;
        aspect-ratio: 1/1;
        margin: 0 auto;
        transform: translate(-50%, -50%);
        animation: float 5s ease-in-out infinite;

        &.load-error {
            animation: unset;
        }
    }
</style>