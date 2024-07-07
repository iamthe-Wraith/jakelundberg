import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { BlogService, type IBlogPost } from "$lib/services/blog";
import { LibraryService, type IBook } from "$lib/services/library";

dayjs.extend(utc);

export const load: PageServerLoad = async ({ locals }) => {
    let posts: IBlogPost[] = [];
    let currentlyReading: IBook[] = [];

    try {
        const blogService = new BlogService();
        posts = await blogService.getPosts(1, 3);
    } catch {
        // swallowing error
    }

    try {
        const libraryService = new LibraryService(locals.sanity);
        currentlyReading = await libraryService.getCurrentlyReading();
    } catch {
        // swallowing
    }

    return {
        blog: {
            posts,
        },
        currentlyReading,
    };
};