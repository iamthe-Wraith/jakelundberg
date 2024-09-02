<script lang="ts">
	import Bugz from "$lib/components/Bugz.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Item from "$lib/components/Item.svelte";
	import MyFavorites from "$lib/components/MyFavorites.svelte";
	import Section from "$lib/components/Section.svelte";
</script>

<!-- <EnvironmentImg
	src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721129624/study-cropped_w65fnn.png"
	alt="An old, dusty, cobweb filled study. A large desk sits in the center with a large, leather chair behind it. The walls are lined with bookshelves filled with books and various trinkets. A large window, covered in cobwebs, lets in the moonlight from outside."
/> -->

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
					If you want to learn more about Jake, this is probably the best place to do it.
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
						Unlike many people who work in software development, Jake didn't start out with a computer in his hands. In fact,
						he didn't even have internet in his house growing up. No, Jake didn't get a taste for technology until he was well
						into his twenties and had already served in the U.S. Army. But once he did, he knew he had found his passion.
					</p>

					<p>
						He grew up in a really small farming town in Washington State where he started working at just 11 years old,
						stacking 50 lbs. bags of onions on pallets in a local packing plant during the summers between school years. When
						he was old enough he got a job at a fast food restaurant where he worked as much as he could until he graduated
						highschool.
					</p>
	
					<p>
						After highschool he joined the U.S. Army and served for 4 years. It was during this time he first discovered his
						love for software development. After the Army he went to work for a big bank doing collections for their automobile
						finance department. While working there, he went to school full time and got his Bachelor's degree in Software
						Engineering. When he graduated, he dove into the software development world and has been working in it ever since.
					</p>
	
					<p>
						He once told me that he hoped everyone could find the same love and passion in their lives that he found in software
						development. He said that it was the one thing that he could do every single day for hours on end and never get bored
						or tired of it. You could always find him working on some project or another, and he was always excited to shar
						 what he was working on with anyone who would listen...usually me!
					</p>
	
					<p>
						Today he lives in Raleigh, North Carolina with his wife, son and their 3 dogs. He's a big fan of grilling and smoking
						meats, playing games with his son, and watching bad horror movies.
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