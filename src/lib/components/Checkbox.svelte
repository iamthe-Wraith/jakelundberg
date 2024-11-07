<script lang="ts">
    type CheckboxType = 'primary' | 'accent1' | 'accent2' | 'accent3' | 'neutral' | 'danger';

    export let id: string;
    export let name: string;
    export let checked = false;
    export let type: CheckboxType = 'primary';
</script>

<div class="container">
    <label for={id} data-testid={id}>
        <input
            {...$$restProps}
            {id}
            {name}
            type="checkbox"
            aria-labelledby="{id}-label"
            data-testid="{id}-input"
            bind:checked={checked}
        />
        
        <div
            class="checkbox {type} {checked ? 'checked' : ''}"
            data-testid="{id}-checkbox"
        >
            <i
                class="fa-regular fa-check"
                data-testid="{id}-checkbox-icon"
            >
            </i>
        </div>
    
        <div id="{id}-label" data-testid="{id}-label">
            <slot></slot>
        </div>
    </label>
</div>

<style>
    .container {
        padding: var(--outline-offset);
    }

    label {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-right: 0.25rem;
        border-radius: 0.25rem;
        overflow: hidden;

        &:hover {
            cursor: pointer;
        }
    }

    input {
        position: absolute;
        top: -9px;
        left: -9px;
        width: 0;
        height: 0;
        opacity: 0;

        &:checked {
            & + .checkbox i {
                display: block;
            }
        }
    }

    .checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 0.25rem;
        
        &.primary {
            border: 1px solid var(--primary-500);
        }

        &.accent1 {
            border: 1px solid var(--accent1-500);
        }

        &.accent2 {
            border: 1px solid var(--accent2-500);
        }

        &.accent3 {
            border: 1px solid var(--accent3-500);
        }

        &.neutral {
            border: 1px solid var(--neutral-350);
        }

        &.danger {
            border: 1px solid var(--danger-500);
        }

        & i {
            display: none;
            font-size: 1.25rem;
        }
    }
</style>