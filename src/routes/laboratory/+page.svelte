<script lang="ts">
	import { lazyLoad } from "$lib/actions/lazy-load";
import Bugz from "$lib/components/Bugz.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<div class="laboratory">
	<img
		src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721957694/laboratory-3_pqfr05.png"
		alt="An old laboratory filled with all kinds of scientific equipment, large pipes, and various machines and gadgets."
	/>
</div>

<div class="container">
	<section class="intro">
		<h1>The Laboratory</h1>

		<div class="intro-content row">
			<div>
				<p>
					This is the Lab. Jake used to spend most of his time in here, always experimenting, trying to find new ways to
					solve some problem or improve things. He was always so excited to show me his latest creations! But then...the explosion...
				</p>

				<p>
					A few weeks before it happened, Jake had discovered Dr. Finkelstein's notebooks hidden in a secret compartment in the desk in his Study.
					He became obsessed with some new project, but he wouldn't tell me what it was. He just said it was going to be amazing...I had never
					seen him so excited. But then one night, while I was tending to the manor, I heard a loud explosion come from the Lab. I rushed in to
					find the place in shambles, Jake was gone...no body, no trace of him at all.
				</p>

				<p>
					I've been repairing this place ever since, trying to figure out what he was working on, and what happened to him. I've found some of his
					notes, but they're all so cryptic. I can't make heads or tails of them.
				</p>

				<p>
					I know once I get the Lab back up and running I'll be able to figure it out. But I can't do that until I find the parts those mischievous
					little ghosts stole.
				</p>
			</div>

			<div class="img-container">
				<Bugz is="waving" />
			</div>
		</div>
	</section>
		
	<section>
		<div class="charlie row">
			<div>
				<img
					class="computer"
					alt="A large computer monitor sitting on a messy desk with a keyboard, mouse, and various papers scattered around it. The screen is illuminating the area with pale blue light."
					use:lazyLoad={'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_500/v1721908896/computer_z1jeba.png'}
				/>
			</div>

			<div>
				<h2>Charlie</h2>

				<p>
					I was able to get enough power in here to turn Charlie back on. Luckily she wasn't damaged in the explosion. Apparently she was working on some
					stuff for Jake when it happened, which is how his blog posts have been going up. I was hoping she might have some information on what he was
					working on, but I don't know the password, so I can't access her files.	
				</p>

				<div class="flex-center">
					<Button
						on:click={() => console.log('using the computer')}
					>
						Use the Computer
					</Button>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.laboratory {
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
		position: relative;
		width: 100%;
		max-width: 60rem;
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
			width: 70%;
			height: 1px;
			background: var(--neutral-300);
			transform: translateX(-50%);
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
		padding-top: 2rem;
		border-top: 5px solid var(--primary-500);
        background: var(--neutral-200);
        z-index: 1;

		&:before {
			display: none;
		}

		& .intro-content {
			flex-direction: column-reverse;
		}
	}

	.charlie {
		gap: 2rem;

		& .computer {
			width: 100%;
			min-width: 18rem;
		}
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