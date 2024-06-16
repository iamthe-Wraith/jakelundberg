<script lang="ts">
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    import { toast } from '$lib/stores/toast';

    let open: boolean;

    let dialog: HTMLDialogElement;

    $: {
        if ($toast.length)  {
            openToastDialog();
        } else {
            closeToastDialog();
        }
    }

    function closeToastDialog() {
        dialog?.close();
        open = false;
    }

    function closeToastMessage(toastId: string) {
        return function() {
            toast.remove(toastId);
        }
    }

    function openToastDialog() {
        if (open) return;

        dialog?.show();
        open = true;
    }
</script>

<dialog
    bind:this={dialog}
    {...$$restProps}
>
    <ul class="toast-messages">
        {#each $toast as toast (toast.id)}
            <li
                class="toast-message {toast.type}"
                out:fade
                animate:flip
            >
                <div class="toast-message-content">
                    <p class="toast-message-text">{ toast.message }</p>

                    {#if toast.redirect}
                        <a
                            href={toast.redirect.url} 
                            target="{toast.redirect.target || '_self'}"
                            on:click={closeToastMessage(toast.id)}
                        >
                            { toast.redirect.text }
                        </a>
                    {/if}
                </div>

                <button
                    class="close" 
                    on:click={closeToastMessage(toast.id)}
                >
                    <i class="fa-regular fa-times"></i>
                </button>
            </li>
        {/each}
    </ul>
</dialog>

<style>
    dialog {
        position: fixed;
        top: 3.75rem;
        right: unset;
        left: 50%;
        width: 80vw;
        max-width: 20rem;
        border: none;
        background: transparent;
        transform: translate(-50%, 0);
        outline: none;
        z-index: 1005;

        @media (min-width: 768px) {
            top: 1rem;
            width: 90vw;
        }
    }

    .toast-message {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;

        &:not(:last-child) {
            margin-bottom: 0.5rem;
        }

        &.success {
            background: var(--accent2-100);
            border: 5px solid var(--accent2-500);
        }

        &.error {
            background: var(--danger-100);
            border: 5px solid var(--danger-500);
        }

        & .toast-message-content {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: flex-start;
            gap: 0.5rem;

            & a {
                display: flex;
                justify-content: center;
                width: 100%;
                color: var(--accent2-900);
                background: var(--accent2-500);
                text-decoration: none;
            }
        }

        @media (max-width: 768px) {
            top: 2rem;
            right: 1rem;
            left: 1rem;
        }
    }

    .toast-message-text {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4rem;
    }

    .close {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        color: var(--neutral-700);
        z-index: 10;
        
        & i {
            font-size: 1.2rem;
        }

        &:hover {
            cursor: pointer;
        }
    }
</style>