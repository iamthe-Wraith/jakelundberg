<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import dayjs from "dayjs";
	import utc from "dayjs/plugin/utc";
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { assets } from '$lib/stores/assets';
	import { assets as assetsPath } from '$app/paths';
	import Bugz from "$lib/components/Bugz.svelte";
	import Tombstone from "$lib/components/Tombstone.svelte";
	import TextBlock from "$lib/components/TextBlock.svelte";

	dayjs.extend(utc);

	export let data: PageData;

	$: console.log(data);

	onMount(() => {
		loadAssets()
			.then();
	})

	function loadAssets(): Promise<void> {
		return new Promise((resolve, reject) => {
			new GLTFLoader().load(
				`${assetsPath}/manor-assets.glb`,
				(gltf) => {
					assets.setAssets('outdoor', gltf.scene.children);
					resolve();
				},
				(xhr) => assets.loading('outdoor', xhr.loaded, xhr.total),
				(error) => {
					assets.error('outdoor', (error as Error).message);
					reject(error);
				},
			);
		});
	}
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
					This is where Jake likes to bury his projects and work stuff. Feel free to take a look around,
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
				<Bugz is="waving" />
			</div>

			<p class="section-intro {data.projects.error ? 'error' : ''}">
				{#if data.projects.error}
					{data.projects.error}
				{:else}
					Jake's always working on something in his lab. Whether it's to learn something new, or it's solving some
					problem he's encountered, he's always got something in the works. And when he's done with them, he buries them
					here in the cemetery. I've heard that some of them are still alive and kicking though!
				{/if}
			</p>
		</div>

		{#if data.projects.data.length && !data.projects.error}
			<div class="list-container">
				{#each data.projects.data as project, i (project.id)}
					<article class="{(i % 2) ? 'reverse' : ''}">
						<div class="dates">
							<!-- TODO: add label for accessibility -->

							<div class="tombstone job-tombstone">
								<!--
									there are 4 variants of the tombstone, so will use the remainder
									of the index divided by 4 (+1 since the variants are identified
									with starting index of 1) to determine which variant to use
								-->
								<Tombstone variant={i % 4 + 1} />
							</div>
						</div>

					<div class="content">
						<div class="header">
							<a href="{project.url}" target="_blank" class="h5 title">
								{project.name}
							</a>
						</div>

						<div class="metadata">
							links...
						</div>
		
						{#if project.description}
							<div class="description">
								<TextBlock text={project.description} />
							</div>
						{/if}

						<div class="techs">
							{#each project.tech as tech}
								<a
									href="{tech.url}"
									target="_blank"
									class="tech"
								>
									{tech.name}
								</a>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</section>

	<section class="work">
		<h2>Work Stuff</h2>

		<div class="row">
			<div class="img-container">
				<Bugz is="waving" />
			</div>

			<p class="section-intro {data.jobs.error ? 'error' : ''}">
				{#if data.jobs.error}
					{data.jobs.error}
				{:else}
					Jake has lots of experience building stuff for the web! He's told me lot's of stories about the different projects he's worked on
					and the people he's gotten to work with. My favorite is the one about the time he built an automation tool named Igor. Isn't
					that a silly name for a developer tool?!
				{/if}
			</p>
		</div>

		{#if data.jobs.data.length && !data.jobs.error}
			<div class="list-container">
				{#each data.jobs.data as job, i (job.id)}
					<article class="{(i % 2) ? 'reverse' : ''}">
						<div class="dates">
							{#if job.endDate}
								<!-- TODO: add label for accessibility -->

								<div class="tombstone job-tombstone">
									<!--
										there are 4 variants of the tombstone, so will use the remainder
										of the index divided by 4 (+1 since the variants are identified
										with starting index of 1) to determine which variant to use
									-->
									<Tombstone variant={i % 4 + 1}>
										{dayjs(job.startDate).local().format('MMM YYYY')}
										- 
										{dayjs(job.endDate).local().format('MMM YYYY')}
									</Tombstone>
								</div>
							{:else}
								<div>present...</div>
							{/if}
						</div>

					<div class="content">
						<div class="header">
							<a href="{job.url}" target="_blank" class="h5 title">
								{job.position}&#12539;{job.companyName}
							</a>
						</div>

						<div class="metadata">
							<p>{job.location}</p>
						</div>
		
						{#if job.summary}
							<div class="summary">
								<TextBlock text={job.summary} />
							</div>
						{/if}

						<div class="techs">
							{#each job.tech as tech}
								<a
									href="{tech.url}"
									target="_blank"
									class="tech"
								>
									{tech.name}
								</a>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		{/if}
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

	.section-intro {
		&.error {
			font-size: unset;
		}
	}

	.list-container {
		padding-top: 14rem;

		@media (min-width: 768px) {
			padding-top: 0;
		}
	}

	article {
		display: flex;
		flex-direction: column;
		padding: 7rem 1rem 0.5rem;
		border: 5px solid var(--neutral-300);
		transition: 0.2s ease-in-out;

		&:has(a:not(.tech):hover),
		&:has(a:not(.tech):focus-visible) {
			border: 5px solid var(--neutral-400);
			background: var(--neutral-200);
			transform: scale(1.02);
		}

		&:not(:last-of-type) {
			margin-bottom: 15rem;
		}

		& .dates,
		& .metadata {
			& p,
			& p * {
				margin: 0;
				font-size: 0.75rem;
				color: var(--neutral-500);
			}
		}

		& .dates {
			position: relative;

			& p {
				position: absolute;
				top: 30%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		
		& .tombstone {
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 20rem;
			margin: -3rem auto 0;
			aspect-ratio: 1 / 1;
			transform: translateX(-50%);
		}

		& .metadata {
			margin-bottom: 0.5rem;
			text-align: center;
		}

		& .content {
			& .title {
				display: block;
				margin: 0;
				text-align: center;
				text-decoration: none;
			}

			& .techs {
				display: flex;
				justify-content: flex-end;
				gap: 0.25rem;
				flex-wrap: wrap;
				margin-top: 1rem;

				& .tech {
					margin-bottom: 0.25rem;
					padding: 0 0.5rem;
					font-size: 0.85rem;
					background: var(--neutral-900);
					color: var(--neutral-100);
					font-size: 0.8rem;
					line-height: 1.3rem;
					text-decoration: none;

					&:hover,
					&:focus-visible {
						background-color: var(--accent2-500);
						color: var(--neutral-900);
					}
				}

				& .tech:nth-child(1n) {
					transform: rotate(-3deg);
				}

				& .tech:nth-child(2n) {
					transform: rotate(-1deg);
				}

				& .tech:nth-child(3n) {
					transform: rotate(2deg);
				}
			}
		}

		@media (min-width: 768px) {
			flex-direction: row;
			align-items: stretch;
			gap: 1rem;
			padding: 0.5rem 1rem;
			
			&.reverse {
				flex-direction: row-reverse;

				& .tombstone {
					right: unset;
					left: 0;
				}

				& .content .tags {
					justify-content: flex-start;
				}
			}

			&:not(:last-of-type) {
				margin-bottom: 2rem;
			}

			& .dates {
				display: flex;
				justify-content: flex-end;
				max-width: 15rem;
				min-width: 15rem;
				padding-top: 0.3rem;

				& p {
					text-align: center;
				}
			}

			& .tombstone {
				top: 50%;
				left: unset;
				right: 0;
				bottom: unset;
				margin: 0;
				transform: translate(0, -50%);
			}

			& .content {
				flex-grow: 1;

				& .techs {
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