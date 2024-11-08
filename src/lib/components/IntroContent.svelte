<div class="intro-content">
    <slot></slot>
</div>

<style>
    .intro-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 50rem;
        margin: 0 auto;

        & p:last-child {
            margin-bottom: 0;
        }

        & p {
            margin-bottom: 1rem;

            & span {
                color: var(--accent1-500);
            }

            & a {
                text-decoration: none;
            }
        }
    }
</style>