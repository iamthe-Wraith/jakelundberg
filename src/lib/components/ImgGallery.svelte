<div class="gallery">
    <slot />
</div>

<style>
    .gallery {
        display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1rem;

        & img {
            &:nth-child(n+1) {
                transform: rotate(6deg);
            }

            &:nth-child(n+2) {
                transform: rotate(-3deg);
            }

            &:nth-child(n+3) {
                transform: rotate(4deg);
            }

            &:nth-child(n+4) {
                transform: rotate(-2deg);
            }

            &:nth-child(n+5) {
                transform: rotate(5deg);
            }

            &:nth-child(n+6) {
                transform: rotate(-6deg);
            }
        }
    }
</style>