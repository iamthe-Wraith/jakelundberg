<script lang="ts">
	import type { IBlogPost } from "$lib/services/blog";
	import type { PageData } from "./$types";
	import type { IBook } from "$lib/services/library";
	import BlogPost from "$lib/components/BlogPost.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Section from "$lib/components/Section.svelte";
	import IntroContent from "$lib/components/IntroContent.svelte";

    export let data: PageData;

    let currentlyReading: IBook[] = [];
    let blogPosts: IBlogPost[] = [];

    $: currentlyReading = data?.currentlyReading ?? [];
    $: blogPosts = data?.blog?.posts ?? [];
</script>

<div class="container">
    <Intro header="Hey, I'm Jake.">
        <IntroContent>
            <p>
                I'm a software engineer with over 10 years of experience in building strange and wonderful
                things for the web. I'm genuinely passionate about what I do!
            </p>

            <p>
                When I'm not wrestling with code, you can find me lost in the magical realms of fantasy games
                and puzzles (both playing in them and creating them myself), or watching delightfully terrible horror
                movies with my family that make us question our life choices. I also enjoy snuggling with my
                puppies—because who doesn't love a furry snuggle buddy?! And let's not forget my secret talent:
                grilling the perfect steak. I'm no wizard in the kitchen, but give me a grill and I'll make you
                a steak that will make your taste buds do backflips! (<em> no gas allowed! 🔥</em>).
            </p>

            <p>
                But it's not all about the code and the grill. I'm also passionate about building people up in their
                careers and creating teams that actually enjoy working together. And for some odd reason, I also really
                enjoy finding that perfect balance between process and autonomy that makes teams and companies
                thrive.
            </p>

            <p>
                So, welcome to my little corner of the internet! I'm excited to share my work, my quirks, and maybe even
                a few dad jokes along the way. Let's connect and see where this adventure takes us!
            </p>
        </IntroContent>
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

    <Section style="--section-max-width: 80rem">
        <div class="flex-center">
            What people have to say coming soon...
        </div>
    </Section>
</div>

<style>
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

    @media (min-width: 1024px) {
        .blog-posts-container .blog-posts {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }
</style>