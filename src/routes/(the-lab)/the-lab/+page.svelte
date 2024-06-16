<script lang="ts">
	import dayjs, { type Dayjs } from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import type { PageData } from './$types';

	dayjs.extend(utc);

    export let data: PageData;

	let routes: any;
	let search = '';

	$: routes = (data?.experiments || []).filter(({ name, description }) => {
        return name.toLowerCase().includes(search.toLowerCase())
            || description.toLowerCase().includes(search.toLowerCase())
    });

	const getTimeAgo = (timestamp: Dayjs) => {
		const diff = dayjs().diff(timestamp, 'minutes');

		if (diff > 525600) {
			return `${Math.floor(diff / 525600)} years ago`;
		} else if (diff > 43800) {
			return `${Math.floor(diff / 43800)} months ago`;
		} else if (diff > 10080) {
			return `${Math.floor(diff / 10080)} weeks ago`;
		} else if (diff > 1440) {
			return `${Math.floor(diff / 1440)} days ago`;
		} else if (diff > 60) {
			return `${Math.floor(diff / 60)} hours ago`;
		}

		return 'just now';
	};
</script>

<div class="page">
    <div class="container">
        <div class="intro-container">
            <h1>🧪 Welcome to The Lab</h1>
            <div class="intro">
				<img
					src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718311667/mad-scientist_ejst33.png"
					alt="A mad scientist with crazy hair holding a flask of glowing, bubbling liquid"
				/>

				<div class="intro-text">
					<p>
						This is just a collection of random stuff I've been playing around with. From testing out an idea to experimenting 
						with some new technology. It's all here. Feel free to take a look around and let me know what you think
					</p>
				</div>
			</div>
        </div>
    
        <div class="search-container">
			<input
				id="search-experiments"
				class="search"
				placeholder="Search experiments"
                bind:value={search}
			/>
    
            <label for="search-experiments">
                <i class="fa-regular fa-search"></i>
            </label>
        </div>
    
        <div class="experiments">
            {#if routes.length}
                <p class="muted">Showing {routes.length} experiment{routes.length > 1 ? 's' : ''}</p>
            {/if}
    
            {#each routes as { name, route, timestamp, description, links }}
                <div class="experiment">
                    <a href={route}>
                        <h2>{name}</h2>
                        <p class="muted">posted {getTimeAgo(timestamp)}</p>
                        <p>{@html description}</p>
                    </a>

					{#if links?.length}
						<div class="links">
							{#each links as { text, url, icon }}
								<a href="{url}" target="_blank">
									{#if icon}
										<i class={icon}></i>
									{/if}

									{text}
								</a>
							{/each}
						</div>
					{/if}
                </div>
            {:else}
                <div class="no-experiments">
                    <p class="muted">No experiments found</p>
                </div>
            {/each}	
        </div>	
    </div>
</div>

<style>
	.container {
		width: 96%;
		max-width: 50rem;
		margin: 0 auto;
		padding-top: 2rem;
	}

	.intro-container {
		margin-bottom: 3rem;
	}

	.intro {
		display: flex;
		align-items: flex-start;
		gap: 1rem;

		& img {
			width: 15rem;
			border: 5px solid var(--neutral-300);
		}

		& .intro-text {
			flex: 1;
		}
	}

	.search-container {
		position: relative;
		display: flex;

		& input {
			position: relative;
			width: calc(100% - 3rem);
			padding: 0.3rem 1rem;
			font-size: 1rem;
			border: 5px solid var(--primary-400);
			background: var(--neutral-100);
			color: var(--neutral-900);
			z-index: 1;
		}

		& label {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width:3rem;
			height: 3.5rem;
			padding-right: 1rem;
			background: var(--primary-400);
			color: var(--neutral-900);

			&:before,
			&:after {
				content: '';
				position: absolute;
				right: 100%;
			}

			& i {
				font-size: 1.25rem;
			}
		}
	}

	.experiments {
		padding: 1rem 0;	
	}

    .no-experiments {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.25rem 0 1rem;
    }

	.experiment {
		margin: 1rem 0;
		border: 5px solid var(--neutral-300);

		& > a {
			display: block;
			padding: 1rem;
			background: var(--neutral-150);
			text-decoration: none;
			color: var(--neutral-900);
		}

		& h2 {
			margin: 0;
		}

		& p {
			margin: 0;
		}

		& .muted {
			margin: 0.25rem 0 1rem;
		}

		& .links {
			display: flex;
			justify-content: flex-end;
			gap: 1rem;
			padding: 0.5rem;

			& a {
				position: relative;
				padding: 0 0.5rem;
				font-size: 0.85rem;
				background: var(--neutral-900);
				color: var(--neutral-100);
				text-decoration: none;
				transition: all 0.25s ease-in-out;
			}

			& a:nth-child(1n) {
				transform: rotate(-3deg);

				&:hover,
				&:focus-visible {
					transform: rotate(1deg) scale(1.2);
				}
			}

			& a:nth-child(2n) {
				transform: rotate(-1deg);

				&:hover,
				&:focus-visible {
					transform: rotate(3deg) scale(1.2);
				}
			}

			& a:nth-child(3n) {
				transform: rotate(2deg);

				&:hover,
				&:focus-visible {
					transform: rotate(-2deg) scale(1.2);
				}
			}
		}
	}

	.muted {
        margin: 0;
		font-size: 0.95rem;
		font-style: italic;
		color: var(--neutral-500);
	}
</style>