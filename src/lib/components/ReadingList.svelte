<script lang="ts">
	import type { IBook } from "$lib/services/library";
	import type { ITab } from "$lib/types/tabs";
	import { onMount } from "svelte";
	import Tabs from "./Tabs.svelte";
	import { lazyLoad } from "$lib/actions/lazy-load";

    export const ReadingStatus = {
        Read: 'read',
        Unread: 'unread',
    } as const;

    let status = ReadingStatus.Read as typeof ReadingStatus[keyof typeof ReadingStatus];
    let books: IBook[] = [];
    let error = '';
    let loading = true;

    let tabs: ITab[] = [];

    onMount(() => {
        reset();
    });

    const loadMore = async () => {
        loading = true;

        try {
            const res = await fetch(`/library/${status}`);

            if (res.ok) {
                books = await res.json();
            } else {
                error = await res.text();

                if (!error || error.toLowerCase().includes('<!doctype')) {
                    throw new Error('unknown error');
                }
            }
        } catch (err) {
            error = 'It looks like something went wrong. Please try again later.';
        }

        loading = false;
    }

    const reset = () => {
        loading = true;
        error = '';
        books = [];
        setTabs();
        loadMore();
    }

    const setStatus = (e: CustomEvent) => {
        status = e.detail.id;
        reset();
    };

    const setTabs = () => {
        tabs = [
            {
                icon: 'fa-regular fa-book-open-cover',
                id: ReadingStatus.Read,
                label: 'Read', 
                selected: status === ReadingStatus.Read 
            },
            { 
                icon: 'fa-regular fa-book',
                id: ReadingStatus.Unread,
                label: 'Not Read Yet', 
                selected: status === ReadingStatus.Unread
            },
        ]
    }
</script>

<div class="reading-list-container">
    <div class="tabs-container">
        <Tabs {tabs} on:tab-click={setStatus} />
    </div>

    {#if error}
        <div class="center">
            <p class="h6">Well this is awkward...</p>
            <p>{error}</p>
        </div>
    {:else}
        {#if loading}
            <div class="center">
                <p>Loading...</p>
            </div>
        {:else}
            <ol class="reading-list">
                {#each books as book (book.id)}
                    <li class="book">
                        <a href="{book.url}" target="_blank">
                            <img
                                use:lazyLoad={book.image || ''}
                                alt="{book.title} book cover"
                                aria-labelledby="book-title"
                            />

                            <div id="book-title" class="screen-reader-only">
                                <p>{book.title}</p>
                            </div>
                        </a>
                    </li>
                {:else}
                    <div class="center">
                        {#if status === ReadingStatus.Read}
                            <p>No books found</p>
                        {:else if status === ReadingStatus.Unread}
                            <p>No unread books found</p>
                        {:else}
                            <p>None found</p>
                        {/if}
                    </div>
                {/each}
            </ol>
        {/if}
    {/if}
</div>

<style>
    .reading-list-container {
        display: flex;
        flex-direction: column;
        min-height: 550px;
    }

    .tabs-container {
        position: relative;
        margin-bottom: 1rem;
    }

    .reading-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
        list-style: none;
    }

    .book {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        & a {
            position: relative;
            width: 8rem;
            height: 100%;
            min-height: 5rem;
            transition: transform 0.15s ease-in-out;
            transform: scale(1);   

            &:hover,
            &:focus-visible {
                transition: transform 0.15s ease-in-out;
                transform: scale(1.05);
            }
        }

        & img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;         
        }

        @media (min-width: 500px) {
            & a {
                width: 10rem;
            }
        }
    }

    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        padding: 2rem 1rem 1rem;

        & p {
            margin: 0;
            color: var(--neutral-500);
        }
    }
</style>