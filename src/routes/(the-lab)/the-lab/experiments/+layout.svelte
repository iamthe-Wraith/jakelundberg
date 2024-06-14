<div class="experiment-header">
    <a href="/the-lab">
        <i class="fa-regular fa-chevron-left"></i>
        Back to The Lab
    </a>
</div>

<slot></slot>

<style>
    .experiment-header {
        padding: 0 1rem;
        margin-bottom: 2rem;

        & a {
            font-size: 1rem;
            color: var(--neutral-600);
            text-decoration: none;

            &:hover,
            &:focus-visible {
                color: var(--accent1-500);
            }
        }
    }
</style>