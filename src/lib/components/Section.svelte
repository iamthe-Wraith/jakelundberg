<script lang="ts">
    export let style = '';
</script>

<section {style}>
    <slot></slot>
</section>

<style>
    section {
        position: relative;
        width: 100%;
        max-width: var(--section-max-width, 60rem);
        margin: 0 auto 3rem;
        padding-top: 5rem;

        &:not(:last-of-type) {
            margin-bottom: 5rem;
            padding-bottom: 1rem;
        }

        &:before {
            content: ' ';
            position: absolute;
            bottom: 100%;
            left: 50%;
            width: 50vw;
            height: 1px;
            background: var(--neutral-300);
            transform: translateX(-50%);
        }
    }
</style>