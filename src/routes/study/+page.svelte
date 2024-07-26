<script lang="ts">
	import Bugz from "$lib/components/Bugz.svelte";
	import EnvironmentImg from "$lib/components/EnvironmentImg.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Item from "$lib/components/Item.svelte";
	import MyFavorites from "$lib/components/MyFavorites.svelte";
	import Section from "$lib/components/Section.svelte";
</script>

<EnvironmentImg
	src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721129624/study-cropped_w65fnn.png"
	alt="An old, dusty, cobweb filled study. A large desk sits in the center with a large, leather chair behind it. The walls are lined with bookshelves filled with books and various trinkets. A large window, covered in cobwebs, lets in the moonlight from outside."
/>

<div class="container">
	<Intro header="The Study">
		<div class="item venomized-iron-man">
			<Item
				id="venomized-iron-man"
				src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223720/venom-ironman-funko-200x200_fdrfyw.png"
				alt="Venomized Iron Man Funko Pop"
			/>
		</div>

		<div class="item headless-jack-skellington">
			<Item
				id="headless-jack-skellington"
				src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/headless-jack-skelington-funko-200x200_ulie31.png"
				alt="Headless Jack Skellington from The Nightmare Before Christmas Funko Pop"
			/>
		</div>

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

		<div class="item hulk">
			<Item
				id="hulk"
				src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/hulk-funko-200x200_k9ktsf.png"
				alt="Hulk Funko Pop"
			/>
		</div>
	</Intro>

	<Section>
		<div class="bio">
			<div class="header-container">
				<h2>
					About Jake
				</h2>
			</div>
	
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
	
			<div class="item iron-man">
				<Item
					id="iron-man"
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/ironman-funko-200x200_brjy8y.png"
					alt="Iron Man Funko Pop"
				/>
			</div>
		</div>
	</Section>	

	<Section>
		<div class="favorites">
			<h2>
				Favorites
			</h2>
	
			<MyFavorites includeItems />
		</div>
	</Section>

	<!-- <section class="shelf shelf-2">
		<button>
			<img
				class="artwork"
				src="https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,h_500/v1721223756/ironman-wood-poster_oaaqes.webp"
				alt="Wooden Iron Man movie poster"
			/>
		</button>

		<div>
			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/poo-emoji-stuffed-toy-200x200_hmjrcd.png"
					alt="Poo emoji stuffed toy"
				/>
			</button>

			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223722/thing-200x200_ydecso.png"
					alt="A mold figure of Thing from The Adams Family"
				/>
			</button>

			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/hulk-buster-lego-200x200_owuqmq.png"
					alt="Lego Hulkbuster armor"
				/>
			</button>

			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/dundie-award-200x200_uil2kf.png"
					alt="Dundie Award from The Office"
				/>
			</button>
		</div>
	</section>

	<section class="shelf shelf-3">
		<div>
			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223721/zero-200x200_wtplie.png"
					alt="Light up figure of Zero from The Nightmare Before Christmas"
				/>
			</button>

			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223721/pumpkin-king-funko-200x200_tik8yw.png"
					alt="Jack Skellington from The Nightmare Before Christmas dressed as The Pumpkin King Funko Pop"
				/>
			</button>

			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/back-to-the-future-doc-funko-200x200_bcym9p.png"
					alt="Doc Brown from Back to the Future Funko Pop"
				/>
			</button>

			<button>
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721223718/kevin-funko-200x200_srfttr.png"
					alt="Kevin from The Office dressed up as Captain Dunder Mifflin Funko Pop"
				/>
			</button>
		</div>

		<button>
			<img
				class="artwork"
				src="https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,h_500/v1721230788/ironman-metal-poster_ns19uy.jpg"
				alt="Metal poster of Iron Man The Birth of the Power comic book cover"
			/>
		</button>
	</section> -->
</div>

<style>
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

	.venomized-iron-man {
		--item-width: 100px;
		bottom: 100%;
		left: 0.5rem;
	}

	.headless-jack-skellington {
		right: 3rem;
		bottom: calc(100% - 8px);
		width: 100px;
	}

	.intro-content {
		flex-direction: column-reverse;
	}

	.hulk {
		right: 0rem;
		bottom: -3px;
		width: 90px;
	}

	.bio {
		position: relative;
		border-bottom: 5px solid var(--primary-500);

		&:not(:last-of-type) {
			padding-bottom: 5rem;
		}

		& .header-container {
			position: relative;
		}

		& .iron-man {
			bottom: -8px;
			left: 2rem;
			width: 100px;
		}

		@media (min-width: 500px) {
			&:not(:last-of-type) {
				padding-bottom: 1rem;
			}	
		}
	}

	.item {
		position: absolute;
		line-height: 0;
	}

	@media (min-width: 500px) {
		.intro-content {
			flex-direction: row;
			gap: 0.5rem;
        }
    }
</style>