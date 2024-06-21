<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import type { IBlogPost } from "$lib/services/blog";

    export let data: PageData;
    
    let featuredArticles: IBlogPost[] = [];

    onMount(() => {
        fetchFeaturedArticles();
    })

    /**
     * Fetches the 5 most recent featured articles from the DEV API
     * 
     * ℹ️ This is an open endpoint, meaning it does not require an API key.
     * And since dev.to only disables CORS for authenticated endpoints, we
     * are able to make this request from the browser.
     */
    const fetchFeaturedArticles = async () => {
        const res = await fetch('https://dev.to/api/articles?per_page=5');

        featuredArticles = await res.json();
    }
</script>

<div class="experiment-container">
    <h1>Let's Play with the DEV API</h1>

    <p>This is a little snippet used in one of my blog posts to illustrate how to work with the dev.to API.</p>

    <section>
        <h2>All Featured Articles From dev.to</h2>

        {#each featuredArticles as article}
            <div>
                <a href={article.url}>{article.title}</a>
            </div>
        {/each}
    </section>

    <section>
        <h2>My Personal Articles on dev.to</h2>

        {#each (data.articles || []) as article}
            <div>
                <a href={article.url}>{article.title}</a>
            </div>
        {/each}
    </section>
</div>

<style>
    .experiment-container {
        width: 80%;
        max-width: 50rem;
        margin: 2rem auto;
    }

    section {
        margin: 2rem 0;
    }
</style>