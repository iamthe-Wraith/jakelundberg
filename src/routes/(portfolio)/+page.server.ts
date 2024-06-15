import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { DEV_TO_API_KEY } from "$env/static/private";
import { BlogService, type IBlogPost } from "$lib/services/blog";

dayjs.extend(utc);

export const load: PageServerLoad = async () => {
    let posts: IBlogPost[] = [];

    try {
        const blogService = new BlogService();
        posts = await blogService.getPosts(1, 3);
    } catch (err) {
        console.error(err);
    }

    return {
        blog: {
            posts,
        }
    };
};