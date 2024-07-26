<script lang="ts">
	import type { IBlogPost } from "$lib/services/blog";
	import type { PageData } from "./$types";
	import Bugz from "$lib/components/Bugz.svelte";
	import type { IBook } from "$lib/services/library";
	import BlogPost from "$lib/components/BlogPost.svelte";
	import EnvironmentImg from "$lib/components/EnvironmentImg.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Section from "$lib/components/Section.svelte";

    export let data: PageData;

    let currentlyReading: IBook[] = [];
    let blogPosts: IBlogPost[] = [];

    $: currentlyReading = data?.currentlyReading ?? [];
    $: blogPosts = data?.blog?.posts ?? [];
</script>

<EnvironmentImg
    src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1721872334/manor-gate_vfs5th.png"
    alt="An iron gate standing slightly ajar between 2 large stone pillars. A stone path leads up to the gate
    and beyond into a dark forest. Vines and most climb up the stone pollers and gate, giving the impression
    that the gate has been abandoned for some time."
/>

<div class="container">
    <Intro header="Welcome to Wraith Manor">
        <div class="intro-content">
            <div class="img-container">
                <Bugz />
            </div>
    
            <div>
                <p>
                    I'm Dee Bugz, but everyone just calls me Bugz for short. 
                </p>
        
                <p>
                    I'll be your guide as you explore the grounds of Wraith Manor, the home of a mad software
                    engineer named <span>Jake Lundberg</span>, whose passion for building software has led him
                    to create many strange and wonderful things for the web.
                </p>

                <p>
                    But be careful...
                </p>
        
                <p>
                    Ever since he went missing, strange things have been happening around here.
                </p>
            </div>
        </div>
    </Intro>

    {#if currentlyReading.length > 0}
        <Section>
            <div class="currently-reading">
                <h2>Currently Reading</h2>

                <div class="currently-reading-list">
                    {#each currentlyReading as book}
                        <a href="{book.url}" target="_blank" class="book">
                            <img src={book.image} alt={book.title} />
                        </a>
                    {/each}
                </div>
            </div>
        </Section>
    {/if}

    {#if blogPosts.length > 0}
        <Section style="--section-max-width: 80rem">
            <div class="blog-posts-container">
                <h2>Latest Blog Posts</h2>
    
                <div class="blog-posts">
                    {#each blogPosts as post}
                        <BlogPost {post} />
                    {/each}
                </div>
            </div>
        </Section>
    {/if}
</div>

<style>
    .intro-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 50rem;
        margin: 0 auto;

        & p:last-child {
            margin-bottom: 0;
        }

        & .img-container {
            display: flex;
            justify-content: center;
        }

        & p {
            margin-bottom: 1rem;

            & span {
                color: var(--accent1-500);
            }

            & a {
                text-decoration: none;
            }
        }
    }

    .currently-reading {
        container-type: inline-size;
        container-name: currently-reading;
        max-width: 60rem;

        & .currently-reading-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            & .book {
                width: 10rem;
                border: 5px solid var(--neutral-300);
                transition: all 0.2s ease-in-out;
                
                &:hover,
                &:focus-visible {
                    border-color: var(--primary-500);
                    transform: scale(1.03);
                }
            }

            & img {
                display: block;
                width: 100%;
                height: auto;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    .blog-posts-container {
        width: 100%;
        padding: 0 1rem;

        & .blog-posts {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 1.5rem;
        }
    }

    @media (min-width: 500px) {
        .intro-content {
            flex-direction: row;
            gap: 0.5rem;
        }
    }

    @media (min-width: 1024px) {
        .blog-posts-container .blog-posts {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }
</style>