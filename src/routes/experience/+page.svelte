<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import dayjs from "dayjs";
	import utc from "dayjs/plugin/utc";
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { assets } from '$lib/stores/assets';
	import { assets as assetsPath } from '$app/paths';
	import Bugz from "$lib/components/Bugz.svelte";
	import TextBlock from "$lib/components/TextBlock.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Section from "$lib/components/Section.svelte";

	dayjs.extend(utc);

	export let data: PageData;

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

<!-- <EnvironmentImg
	src="https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_1024/v1720401233/cemetery_sgsaei.png"
	alt="A spooky cemetery in the mountains at night with crooked tombstones and creepy trees."
/> -->

<div class="container">
	<Intro header="Experience">
		<div class="intro-content row">
			<div>
				<p>
					Jake has been building stuff for the web for a long time. But even after more than a decade of experience, he
					still gets excited about learning new things and building new stuff. I've never seen anyone so passionate about
					what they do!
				</p>

				<p>
					Not only does he like learning new things, but he also loves using what he knows to help solve problems. He's
					always looking for ways to make things better. Wether it's optimizing an application's performance, automating
					some tedious task, or just making something easier to use, he's constantly working to make the web, and the world
					around him a better, more enjoyable place.
				</p>
			</div>
	
			<div class="img-container">
				<Bugz is="waving" />
			</div>
		</div>
	</Intro>

	<Section>
		<div class="work">
			<h2>Work Stuff</h2>
	
			<div class="row">
				<div class="img-container">
					<Bugz is="waving" />
				</div>
	
				<div class="section-intro">
					{#if data.jobs.error}
						<p class="error">
							{data.jobs.error}
						</p>
					{:else}
						<p>
							Jake has had the opportunity to work at some really cool places over the years. From client management
							tools, to environmental initiatives, to financial services, he's had the chance to work on a wide variety
							of projects and with some amazing people. And everywhere he goes he brings his passion for building
							software and making things better.
						</p>

						<p>
							Here are a few of the places he's worked and some of the things he's done. 
						</p>
					{/if}
				</div>
			</div>
	
			{#if data.jobs.data.length && !data.jobs.error}
				<div class="list-container">
					{#each data.jobs.data as job, i (job.id)}
						<article class="{(i % 2) ? 'reverse' : ''}">
							<a
								href="{job.url}" 
								target="_blank" 
								class="company-logo-container"
							>
								<img
									class="company-logo"
									src="{job.logo}"
									alt="{job.companyName} logo"		
								/>
							</a>
	
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
							</div>
						</article>
					{/each}
				</div>
			{/if}
		</div>
	</Section>

	<Section>
		<div class="projects">
			<h2>Projects</h2>
	
			<div class="row">
				<div class="img-container">
					<Bugz is="waving" />
				</div>
	
				<div class="section-intro">
					{#if data.projects.error}
						<p class="error">
							{data.projects.error}
						</p>
					{:else}
						<p>
							Jake is also one of those developers that just loves to build things. So he's always got some project or another
							that he's working on. He tells me about them when it's my bedtime, and they always sound so exciting!
						</p>

						<p>
							Here are a few of the projects he's built over the years. I hope you find them as interesting as I do!
						</p>
					{/if}
				</div>
			</div>
	
			{#if data.projects.data.length && !data.projects.error}
				<div class="list-container">
					{#each data.projects.data as project, i (project.id)}
						<article class="{(i % 2) ? 'reverse' : ''}">
							<a href="{project.url}" target="_blank" class="project-img-container">
								<img
									class="project-img"
									src="{project.image}"
									alt="project preview"
								/>
							</a>
	
							<div class="content">
								<div class="header">
									<a href="{project.url}" target="_blank" class="h5 title">
										{project.name}
									</a>
								</div>
				
								{#if project.description}
									<div class="description">
										<TextBlock text={project.description} />
									</div>
								{/if}
	
								{#if project.links?.length}
									<div class="links">
										{#each project.links as link}
											<a
												href="{link.url}"
												target="_blank"
												class="link"
											>
												{link.label}
											</a>
										{/each}
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
							</div>
						</article>
					{/each}
				</div>
			{/if}
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

	.section-intro {
		padding: 0 0.5rem;

		&.error {
			font-size: unset;
		}
	}

	.list-container {
		padding-top: 3rem;

		@media (min-width: 768px) {
			padding-top: 0;
		}
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 1rem 1rem 0.5rem;
		border: 5px solid var(--neutral-300);
		transition: 0.2s ease-in-out;

		&:has(a:not(.tech):hover),
		&:has(a:not(.tech):focus-visible) {
			border: 5px solid var(--neutral-400);
			background: var(--neutral-200);
			transform: scale(1.02);
		}

		&:not(:last-of-type) {
			margin-bottom: 3rem;
		}

		& .company-logo-container,
		& .project-img-container {
			display: flex;
			justify-content: center;
			margin: 0 auto 1rem;
			padding: 1rem;
		}

		& .company-logo,
		& .project-img {
			display: block;
			width: 100%;
			max-width: 20rem;
			height: auto;
			object-fit: contain;
			object-position: center;
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

		& .links {
			display: flex;
			justify-content: center;
			gap: 1rem;

			& a {
				color: var(--accent1-500);
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

				& .content .tags {
					justify-content: flex-start;
				}
			}

			&:not(:last-of-type) {
				margin-bottom: 4rem;
			}

			& .company-logo-container {
				margin: 0;
			}

			& .project-img,
			& .company-logo {
				min-width: 15rem;
				max-width: 15rem;
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
</style>