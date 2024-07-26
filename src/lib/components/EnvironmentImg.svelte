<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<div class="environment-img">
    <img src="{src}" alt="{alt}" />
</div>

<style>
    .environment-img {
        width: 100%;
        max-width: 80rem;
        margin: 0 auto;
        overflow: hidden;

        & img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
</style>