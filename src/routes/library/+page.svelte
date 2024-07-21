<script lang="ts">
	import Bugz from "$lib/components/Bugz.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	$: console.log(data);
</script>

<div class="library">
	<img
		src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721527490/library-cropped_euc6nx.png"
		alt="An old library with stone walls lined with bookshelves filled with books and various trinkets. Pale moonlight filters in through the large windows on the far wall."
	/>
</div>

<div class="container">
	<section class="intro">
		<h1>The Library</h1>

		<div class="intro-content row">
			<div class="content-container">
				<p>
					Welcome to the Library! This is one of my favorite places in the manor.
				</p>

				<p>
					Jake used to spend countless hours in here reading, writing, studying, and researching. You'll find a lot of his old books
					and notes here. But as you can see, this place hasn't been used in a while...ever since he disappeared the night the Lab
					blew up...
				</p>
			</div>

			<div class="img-container">
				<Bugz is="waving" />
			</div>
		</div>
	</section>

	<section></section>
</div>

<style>
    .library {
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

    .container {
		width: 96%;
		margin: 0 auto;
	}

	section {
		width: 100%;
		max-width: 60rem;
		margin: 0 auto 3rem;

		&:not(:last-of-type) {
			margin-bottom: 2rem;
			padding-bottom: 1rem;
		}
	}

	.row {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& .img-container {
			display: flex;
			justify-content: center;
		}

		@media (min-width: 500px) {
			flex-direction: row;
			gap: 0.5rem;
		}
	}

	.intro {
		position: relative;
		max-width: 60rem;
		margin: -7vw auto 0;
		border-top: 5px solid var(--primary-500);
        background: var(--neutral-200);
        z-index: 1;
	}

	& .intro-content {
		flex-direction: column-reverse;
	}

	@media (min-width: 500px) {
		.intro:not(:last-of-type) {
			padding: 2rem 1rem;
		}

		.intro .intro-content {
			flex-direction: row;
			gap: 0.5rem;
        }
    }
</style>