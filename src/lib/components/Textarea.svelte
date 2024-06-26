<script lang="ts">
    export let id: string;
    export let name: string;
    export let value = '';
    export let label = '';
    export let text = '';
    export let error = '';
    export let maxLength = 0;
    export let required = false;
</script>

<div class="textarea-container">
    {#if label}
        <label for={id}>
            {label}
            {#if !required}
                <span>optional</span>
            {/if}
        </label>
    {/if}

    <textarea
        {id}
        {required}
        {name}
        bind:value
        {...$$restProps}
        class="{error ? 'error' : ''} {$$restProps.class ?? ''}"
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
    :global(:root) {
        --textarea-container-flex-grow: 0;
        --textarea-width: 100%;
        --textarea-height: 6rem;
    }

    .textarea-container {
        display: flex;
        flex-direction: column;
        flex-grow: var(--textarea-container-flex-grow);
        padding: var(--outline-offset);
    }

    label {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        
        & span {
            font-size: 0.75rem;
            color: var(--neutral-600);
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

    textarea {
        flex-grow: 1;
        width: var(--textarea-width, 100%);
        height: var(--textarea-height, 6rem);
        padding: 0.3rem 0.7rem;
        border: 1px solid var(--neutral-300);
        color: var(--neutral-900);
        background-color: var(--neutral-100);
        resize: none;

        &.error {
            font-size: 0.875rem;
            border-color: var(--danger-500);
        }

        &::placeholder {
            color: var(--neutral-350);
        }
    }
</style>