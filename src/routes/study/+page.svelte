<script lang="ts">
	import Bugz from "$lib/components/Bugz.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	$: console.log(data);
</script>

<div class="study">
	<img
		src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721129624/study-cropped_w65fnn.png"
		alt="A old, dusty, cobweb filled study. A large desk sits in the center with a large, leather chair behind it. The walls are lined with bookshelves filled with books and various trinkets. A large window, covered in cobwebs, lets in the moonlight from outside."
	/>
</div>

<div class="container">
	<section class="intro">
		<h1>The Study</h1>

		<div class="intro-content row">
			<div>
				<p>
					If you want to learn more about Jake, this is probably the best place to do it. If he wasn't in the Lab
					or the Library, he was usually here, playing a game, watching a movie, or brainstorming his next project. 
					You'll probably find a lot of his old stuff here, too. He liked to collect different things, so you never
					know what you'll find.
				</p>
			</div>

			<div class="img-container">
				<Bugz is="waving" />
			</div>
		</div>
	</section>

	<section class="bio">
		<h2>About Jake</h2>

		<div class="intro-content row">
			<div class="img-container">
				<Bugz is="waving" />
			</div>

			<div>
				<p>
					Other than his family, I probably knew Jake the best, so let me share a little about him while you look around.
				</p>

				<p>
					Jake grew up in a really small farming town in Washington State. To give you an idea of how small, his graduating
					class only had 26 people in it! Here he started working when he was 11 years old, stacking 50 lbs. bags of onions on
					pallets in a local packing plant. 
				</p>

				<p>
					After highschool he joined the U.S. Army and served for 4 years stationed in Fort Bragg, North Carolina. It was
					during this time he first discovered his love for software development. After the Army he went to work for a big
					bank doing collections for their automobile finance department. While working there, he went to school and got his
					Bachelor's degree in Software Engineering. When he graduated, he dove into the software development world and has
					been working in it ever since.
				</p>

				<p>
					He once told me that he hoped everyone could find the same love and passion in their lives that he found in software
					development. He said that it was the one thing that he could do for hours on end and never get bored. You could always
					find him working on some project or another, and he was always excited to share what he was working on with anyone who
					would listen...usually me!
				</p>

				<p>
					Before he went missing he lived in Raleigh, NC with his wife, son, and their 3 dogs. He was a big fan of grilling and smoking meats,
					playing games with his son, and watching bad horror movies with his wife.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
    .study {
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
		padding: 2rem 1rem;
		border-top: 5px solid var(--primary-500);
        background: var(--neutral-200);
        z-index: 1;

		& .intro-content {
			flex-direction: column-reverse;
		}
	}

	@media (min-width: 500px) {
        .intro .intro-content {
            flex-direction: row;
            gap: 0.5rem;
        }
    }
</style>