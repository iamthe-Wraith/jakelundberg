<script lang="ts">
    export let id: string;
    export let name: string;
    export let value = '';
    export let label = '';
    export let text = '';
    export let error = '';
    export let maxLength = 0;
    export let type: HTMLInputElement['type'] = 'text';
    export let required = false;
    export let theme: 'neutral' | 'light' = 'neutral';

    let ref: HTMLInputElement;

	function typeAction(node: HTMLInputElement) {
		node.type = type || 'text';
	}
</script>

<div class="input-container">
    {#if label}
        <label for={id}>
            {label}
            {#if !required}
                <span>optional</span>
            {/if}
        </label>
    {/if}

    <input
        {id}
        {required}
        {name}
        class="{theme} {error ? 'error' : ''}"
        bind:this={ref}
        bind:value
        use:typeAction
        {...$$restProps}
        on:change
        on:click
        on:focus
        on:blur
        on:keydown
        on:keypress
        on:keyup
    />

    <div class="metadata-container">
        <div>
            {#if text && !error}
                <p class="input-text">{text}</p>
            {/if}

            {#if error}
                <p class="error">{error}</p>
            {/if}
        </div>

        {#if maxLength}
            <p class="char-count">{value.length} / {maxLength}</p>
        {/if}
    </div>
</div>

<style>
    .input-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: var(--outline-offset);
    }

    label {
        & span {
            color: var(--neutral-900);
        }
    }

    .metadata-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 0.25rem;
    }

    p {
        margin: 0;

        &.input-text,
        &.error {
            font-size: 0.75rem;
            line-height: 1rem;
            text-align: left;
        }

        &.input-text {
            color: var(--neutral-700);
        }
    }

    p.char-count {
        font-size: 0.75rem;
        line-height: 1rem;
        text-align: right;
        color: var(--neutral-700);
        white-space: nowrap;
    }

    input {
        width: 100%;
        padding: 0.3rem 0.7rem;
        color: var(--neutral-900);
        background-color: var(--neutral-100);
        
        &.neutral {
            border: 1px solid var(--neutral-300);

            &::placeholder {
                color: var(--neutral-350);
            }
        }

        &.light {
            border: 1px solid var(--neutral-800);

            &::placeholder {
                color: var(--neutral-450);
            }
        }

        &:disabled {
            border: 1px solid var(--neutral-200);
            color: var(--neutral-450);
        }

        &.error {
            font-size: 0.875rem;
            border-color: var(--danger-500);
        }
    }
</style>