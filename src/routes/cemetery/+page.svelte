<script lang="ts">
	import dayjs from "dayjs";
	import utc from "dayjs/plugin/utc";
	import type { PageData } from "./$types";
	import Bugz from "$lib/components/Bugz.svelte";

	dayjs.extend(utc);

	export let data: PageData;
</script>

<div class="cemetery-path">
	<img
		src="https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_1024/v1720401233/cemetery_sgsaei.png"
		alt="A spooky cemetery in the mountains at night with crooked tombstones and creepy trees."
	/>
</div>

<div class="container">
	<section class="intro">
		<h1>Cemetery</h1>

		<div class="intro-content row">
			<div>
				<p>
					Ah, I see you found the cemetery. Kinda spooky isn't it?
				</p>

				<p>
					This is where Jake likes to bury his old projects and work stuff. Feel free to take a look around,
					but don't wander too far...I've heard strange sounds coming from here at night. And after I heard
					the rumors of this place, I had to sleep with my nightlight for a month!
				</p>
			</div>

			<div class="img-container">
				<Bugz is="waving" />
			</div>
		</div>
	</section>

	<section class="projects">
		<h2>Projects</h2>

		<div class="row">
			<div class="img-container">
				<!-- <Bugz is="waving" /> -->
			</div>

			<p>
				...
			</p>
		</div>
	</section>

	<section class="work">
		<h2>Work Stuff</h2>

		<div class="row">
			<div class="img-container">
				<Bugz is="waving" />
			</div>

			<p>
				Jake has lots of experience in the industry! He's told me lot's of stories about the different projects he's worked on
				and the people he's gotten to work with. My favorite is the one about the time he built an automation tool named Igor. Isn't
				that a silly name for a developer tool?! 
			</p>
		</div>

		{#each data.jobs as job}
			<article>
				<div class="dates">
					<p>
						<span>{dayjs(job.startDate).local().format('MMM YYYY')}</span>
						- 
						{#if job.endDate}
							<span>{dayjs(job.endDate).local().format('MMM YYYY')}</span>
						{:else}
							<span>Present</span>
						{/if}
					</p>
				</div>

				<div class="content">
					<div class="header">
						<a href="{job.url}" class="h5 title">
							{job.title}&#12539;{job.company}
						</a>
					</div>
					
					<div class="metadata">
						<p>{job.location}</p>
					</div>
	
					{#if job.summary}
						<div class="summary">
							<p>{job.summary}</p>
						</div>
					{/if}

					<div class="tags">
						{#each job.tags as tag}
							<div class="tag">{tag}</div>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</section>
</div>

<style>
	.cemetery-path {
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

	article {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		border: 5px solid var(--neutral-300);
		transition: 0.2s ease-in-out;

		&:has(a:hover),
		&:has(a:focus-visible) {
			border: 5px solid var(--neutral-400);
			background: var(--neutral-200);
			transform: scale(1.02);
		}

		&:not(:last-of-type) {
			margin-bottom: 1.5rem;
		}

		& .dates,
		& .metadata {
			& p,
			& p * {
				margin: 0;
				font-size: 0.9rem;
				color: var(--neutral-500);
			}
		}

		& .metadata {
			margin-bottom: 0.5rem;
		}

		& .content {
			& .title {
				margin: 0;
				text-align: left;
			}

			& .header a {
				text-decoration: none;
			}

			& .tags {
				display: flex;
				justify-content: flex-end;
				gap: 0.25rem;
				flex-wrap: wrap;
				margin-top: 1rem;

				& .tag {
					margin-bottom: 0.25rem;
					padding: 0 0.5rem;
					font-size: 0.85rem;
					background: var(--neutral-900);
					color: var(--neutral-100);
					font-size: 0.8rem;
					line-height: 1.3rem;
				}

				& .tag:nth-child(1n) {
					transform: rotate(-3deg);
				}

				& .tag:nth-child(2n) {
					transform: rotate(-1deg);
				}

				& .tag:nth-child(3n) {
					transform: rotate(2deg);
				}
			}
		}

		@media (min-width: 768px) {
			flex-direction: row;
			gap: 1rem;
			padding: 0.5rem 1rem;
			
			&:not(:last-of-type) {
				margin-bottom: 2rem;
			}

			& .dates {
				min-width: 10rem;
				padding-top: 0.3rem;
			}

			& .content {
				flex-grow: 1;

				& .tags {
					margin: 1rem 0 -1.5rem 0;
				}
			}
		}
	}

	@media (min-width: 500px) {
        .intro .intro-content {
            flex-direction: row;
            gap: 0.5rem;
        }
    }
</style>