<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { ITab } from "$lib/types/tabs";

    export let tabs: ITab[];

    const dispatcher = createEventDispatcher();

    const onTabClick = (id: string) => () => {
        dispatcher("tab-click", { id });
    };
</script>

<div class="tabs">
    {#each tabs as tab}
        <button
            class="tab"
            class:selected={tab.selected}
            disabled={tab.selected}
            on:click={onTabClick(tab.id)}
        >
            {#if tab.icon && (!tab.iconPosition || tab.iconPosition === 'start')}
                <i class={tab.icon}></i>
            {/if}

            {tab.label}

            {#if tab.icon && tab.iconPosition === 'end'}
                <i class={tab.icon}></i>
            {/if}
        </button>
    {/each}
</div>

<style>
    .tabs {
        display: flex;
        justify-content: flex-start;
        gap: 0.5rem;
        padding: 0.5rem 0.5rem 0;
        overflow: hidden;
    }

    .tab {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        background-color: transparent;
        border: none;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid transparent;
        border-bottom: none;

        &:not(.selected) {
            cursor: pointer;

            &:hover {
                color: var(--primary-500);
            }
        }

        &.selected {
            border: 1px solid var(--neutral-300);
            border-bottom: none;

            &:before,
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                width: 100vw;
                height: 1px;
                background-color: var(--neutral-300);
            }

            &:before {
                right: 100%;
            }

            &:after {
                left: 100%;
            }
        }
    }

    button.selected {
        color: var(--accent-color);
    }
</style>