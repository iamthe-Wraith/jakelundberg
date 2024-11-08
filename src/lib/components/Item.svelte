<script lang="ts">
    export let id: string;
    export let src: string;
    export let alt: string;

    const onItemClick = () => {
        // do nothing for now...
    };
</script>

<button
    {id}
    class="item"
    on:click={onItemClick}
    disabled
>
    <img src={src} alt={alt} />
    <slot></slot>
</button>

<style>
    .item {
        position: relative;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
        width: var(--item-width, auto);
        height: var(--item-height, auto);
        line-height: 0;

		/* &:hover img,
		&:focus-within img {
			filter: drop-shadow(0 0 0.5rem var(--primary-100));
			transition: 0.35s ease-in-out;
		} */

		& img {
			display: block;
			width: 100%;
			height: auto;
			filter: drop-shadow(0 0 0 var(--primary-100));
			transition: 0.3s ease-in-out;
            line-height: 0;
		}
    }
</style>