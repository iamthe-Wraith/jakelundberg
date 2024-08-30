<script lang="ts">
    import { page } from '$app/stores';
    import { enhance } from "$app/forms";
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
	import Button from "../Button.svelte";
	import type { ActionResult } from '@sveltejs/kit';
	import type { IApiError } from '$lib/utils/api-error';

    export let onSignIn: () => void = () => {};

    let showHint = false;
    let pin = '';
    let processing = false;
    let error = '';

    const onHintClick = () => {
        showHint = !showHint;
    };

    const onSubmit = () => {
        processing = true;

        return ({ result }: { result: ActionResult<{ message: string, status: number }> }) => {
            if (result.type === 'failure') {
                if (result.data?.errors) {
                    result.data.errors.map((e: IApiError) => {
                        error = e.message;
                    })
                } else {
                    error = 'Something went wrong. Please try again later.';
                }
            }

            if (result.type === 'success') {
                if (result.data?.status && result.data.status >= 200 && result.data.status < 300) {
                    reset();
                    onSignIn?.();
                } else {
                    error = result.data?.message || 'Something went wrong. Please try again later.';
                }
            }

            processing = false;
        }
    }

    const reset = () => {
        pin = '';
        error = '';
    }
</script>

<div class="auth-container">
    <div class="auth">
        <form
            method="POST"
            action={'/charlie?/signin'}
            use:enhance={onSubmit}
        >
            <label for="pin" class="screen-reader-only">Enter PIN</label>

            <div class="pin-container">
                <input
                    bind:value={pin}
                    type="number"
                    name="pin"
                    placeholder="Enter PIN"
                />

                {#if error}
                    <div class="error">{error}</div>
                {/if}
            </div>

            <div class="buttons-container">
                <Button
                    {processing}
                    type="submit"
                    disabled={!pin || processing}
                >
                    Sign In 
                </Button>

                <Button
                    kind="primary-transparent"
                    on:click={onHintClick}
                >
                    {showHint ? 'Hide' : 'Show'} Hint 
                </Button>
            </div>

            {#if showHint}
                <div
                    class="hint"
                    transition:slide={{ delay: 0, duration: 300, easing: quintOut, axis: 'y' }}
                >
                    Behind the "Genius, billionaire, playboy, philanthropist" in the Study.
                </div>
            {/if}
        </form>

        {#if $page.data.charlie?.version}
            <div class="version">
                charlie {$page.data.charlie?.version}
            </div>
        {/if}
    </div>
</div>

<style>
    .auth-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .auth {
        position: relative;
        width: 96%;
        max-width: 20rem;
        padding: 1rem;
        border: 2px solid var(--primary-500);
        background: var(--neutral-100);
    }

    input {
        width: 100%;
        padding: 0.5rem;
        font-family: var(--header-font);
        font-size: 1.5rem;
        border: 2px solid var(--primary-500);
        border-radius: 0.25rem;
        color: var(--neutral-100);
    }

    .pin-container {
        width: 100%;
        margin-bottom: 1rem;
    }

    .buttons-container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 1rem;
    }

    .hint {
        margin-top: 1rem;
        font-size: 0.85rem;
        text-align: center;
    }

    .version {
        position: absolute;
        top: 100%;
        right: 0;
        font-size: 0.75rem;
        color: var(--neutral-700);
    }
</style>