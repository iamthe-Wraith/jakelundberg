<script lang="ts">
	import type { IBlogPost } from "$lib/services/blog";
	import dayjs from "dayjs";
	import type { PageData } from "./$types";

    export let data: PageData;

    let blogPosts: IBlogPost[] = [];

    $: blogPosts = data?.blog?.posts ?? [];
</script>

<div class="container">
    <div class="manor-gate">
        <img
            class="manor-gate-mobile"
            src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718378575/manor-gate-mobile_fbhyjq.png"
            alt=""
        />

        <div class="manor-gate-desktop">
            <img
                src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718378575/manor-gate-desktop_vsv0fr.png"
                alt=""
            />
        </div>
    </div>

    <div class="intro">
        <p class="h1">Welcome to Wraith Manor</p>

        <div class="intro-content">
            <img
                src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718376369/bugs-hi-square_uxkso5.png"
                alt="A cute cartoon wraith with big, innocent eyes and a red cloak waving at the viewer."
            />
    
            <div>
                <p>
                    I'm Dee Bugz, but everyone just calls me Bugz for short. 
                </p>
        
                <p>
                    I'll be your guide as you explore the grounds of Wraith Manor, once the home of
                    a mad engineer named <span>Jake Lundberg</span>, whose passion for building software 
                    led him to create many strange and wonderful things for the web.
                </p>

                <p>
                    But be careful...
                </p>
        
                <p>
                    Ever since Jake mysteriously disappeared from his lab, strange things have been
                    happening here. 
                    
                    ...
                </p>
            </div>
        </div>
    </div>

    {#if blogPosts.length > 0}
        <div class="blog-posts-container">
            <h2>Latest Blog Posts</h2>

            <div class="blog-posts">
                {#each blogPosts as post}
                    <a
                        href={post.url}
                        target="_blank"
                        class="blog-post"
                    >
                        <div>
                            <div class="blog-post-image">
                                <img
                                    src={post.cover_image}
                                    alt={post.title}
                                />
                            </div>
                            
                            <div class="blog-post-metadata">
                                <p>
                                    posted {dayjs(post.published_timestamp).format('MMM DD, YYYY')}
                                </p>

                                <p>
                                    {post.reading_time_minutes} min read
                                </p>
                            </div>
                        </div>

                        <div class="blog-post-content">
                            <h3>{post.title}</h3>
                            <div>
                                <p>{post.description}</p>
                                <div class="blog-post-tags">
                                    {#each (post.tag_list || []) as tag}
                                        <div>{tag}</div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .manor-gate {
        max-width: 80rem;
        margin: 0 auto;

        & .manor-gate-mobile {
            display: none;
        }

        & .manor-gate-desktop {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            /* min-height: 20rem; */

            & img {
                width: 100%;
                height: 100%;
                min-height: 20rem;
                object-fit: cover;
            }
        }
    }

    .intro {
        position: relative;
        width: 94%;
        max-width: 60rem;
        margin: -7vw auto 3rem;
        padding: 2rem 1rem;
        border-top: 5px solid var(--primary-500);
        background: var(--neutral-200);
        z-index: 1;

        & .h1 {
            position: relative;
            z-index: 2;
        }

        & .intro-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 50rem;
            margin: 0 auto;

            & img {
                width: 10rem;
                height: 10rem;
                margin: 0 auto;
                animation: float 5s ease-in-out infinite;
            }

            & p:last-child {
                margin-bottom: 0;
            }
        }

        & .greeting {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 2rem;
            text-align: center;
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

    .blog-posts-container {
        width: 94%;
        max-width: 80rem;
        margin: 0 auto;
        padding: 2rem 0;

        & .blog-posts {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            gap: 1.5rem;
        }

        & .blog-post {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            max-width: 40rem;
            border: 5px solid var(--neutral-300);
            background: var(--neutral-100);
            text-decoration: none;
            transition: all 0.2s ease-in-out;

            &:hover,
            &:focus {
                border-color: var(--primary-500);
                transform: scale(1.03);
            }

            & img {
                width: 100%;
                height: 14rem;
                object-fit: cover;
                object-position: center;
            }

            & .blog-post-metadata {
                display: flex;
                justify-content: space-between;
                padding: 0 0.5rem;
                
                & p {
                    font-size: 0.75rem;
                    color: var(--neutral-600);
                    line-height: 0.9rem;
                }
            }

            & .blog-post-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-grow: 1;
                padding: 0 1rem 0.5rem;

                & h3 {
                    margin-bottom: 0.5rem;
                }

                & .blog-post-tags {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    gap: 0.5rem;
                    margin: 0.5rem 0 -1.2rem;

                    & div {
                        padding: 0.25rem 0.5rem;
                        background: var(--neutral-900);
				        color: var(--neutral-100);
                        font-size: 0.75rem;
                        line-height: 0.9rem;
                    }

                    & div:nth-child(1n) {
                        transform: rotate(-3deg);
                    }

                    & div:nth-child(2n) {
                        transform: rotate(-1deg);
                    }

                    & div:nth-child(3n) {
                        transform: rotate(2deg);
                    }
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

    @media (min-width: 620px) {
        .intro .intro-content img {
            width: 10rem;
            height: 10rem;
        }
    }

    @media (min-width: 768px) {
        .intro .intro-content img {
            width: 12rem;
            height: 12rem;
        }
    }

    @media (min-width: 1024px) {
        .blog-posts-container .blog-posts {
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            gap: 1rem;
        }

        .blog-posts-container .blog-post {
            width: 25rem;
        }
    }
</style>