<script lang="ts">
	import { lazyLoad } from "$lib/actions/lazy-load";
	import BlogPost from "$lib/components/BlogPost.svelte";
	import Bugz from "$lib/components/Bugz.svelte";
	import EnvironmentImg from "$lib/components/EnvironmentImg.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import ReadingList from "$lib/components/ReadingList.svelte";
	import Section from "$lib/components/Section.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<EnvironmentImg
	src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721527490/library-cropped_euc6nx.png"
	alt="An old library with stone walls lined with bookshelves filled with books and various trinkets. Pale moonlight filters in through the large windows on the far wall."
/>

<div class="container">
	<Intro header="The Library">
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
	</Intro>

	<Section>
		<div class="text-with-img row">
			<div>
				<img
					class="reading-nook"
					alt="An old, cushioned, high back chair with a pile of books stacked next to it sitting in the corner of a stone walled room with a large bookshelf nearby filled with old books."
					use:lazyLoad={'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_500/v1721852421/library-reading-nook_vxiuz2.png'}
				/>
			</div>

			<div>
				<h2>Reading</h2>

				<p>
					Jake also loved to read. He made a point to read at least a few minutes everyday. He would usually read books to learn something new,
					but every now and then he would read just for fun...usually fantasy stories. He loved those! He would read them to me sometimes, always
					doing the voices for the characters, and I would get so lost in the story that I would forget where I was!
				</p>
			</div>
		</div>

		<div class="reading-list-container">
			<ReadingList />
		</div>
	</Section>

	<Section>
		<div class="text-with-img reverse row">
			<div>
				<h2>Writing</h2>

				<p>
					Jake used to sit in here for hours writing. He took notes on everything...random thoughts and ideas, his experiments,
					his favorite books, even things he encountered just wandering around the world. Many of those notes ended up as blog 
					posts, stories, games, even this website started as a bunch of notes from ideas he had!
				</p>

				<p>
					He always told me, no matter where I went, to be sure I had something to write on. Because you never know when inspiration
					will strike, and you don't want to lose that idea!
				</p>
			</div>

			<div>
				<img
					class="writing-materials"
					alt="An old wooden table with sone loose papers, a quill, and some books stacked on top of it. It looks like someone was in the middle of writing something."
					use:lazyLoad={'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_500/v1721698890/notes-on-table_stg0ae.png'}
				/>
			</div>
		</div>

		<div class="bugz-fav-posts">
			<p>
				You can find some of his writing on his <a href="https://dev.to/wraith">Blog</a>, but here are a few of my personal favorites...
			</p>

			<div class="blog-posts">
				{#each data.bugzFavPosts as post (post.id)}
					<BlogPost {post} condensed />
				{/each}
			</div>
		</div>
	</Section>
</div>

<style>
    .container {
		width: 96%;
		margin: 0 auto;
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

	.intro-content {
		flex-direction: column-reverse;
	}

	.text-with-img {
		gap: 2rem;

		&.reverse {
			flex-direction: column-reverse;
		}

		& .reading-nook,
		& .writing-materials {
			display: block;
			width: 100%;
		}

		@media (min-width: 500px) {
			&.reverse {
				flex-direction: row;
			}

			& .reading-nook {
				width: 18rem;
			}

			& .writing-materials {
				width: 22rem;
			}
		}
	}

	.reading-list-container {
		margin-top: 2rem;
	}

	.bugz-fav-posts {
		margin-top: 2rem;

		& > p {
			text-align: center;

			& a {
				color: var(--accent1-500);
			}
		}

		& .blog-posts {
			display: grid;
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 1rem;
		}
	}

	@media (min-width: 500px) {
		.intro-content {
			flex-direction: row;
			gap: 0.5rem;
        }
    }

	@media (min-width: 968px) {
		.bugz-fav-posts .blog-posts {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>