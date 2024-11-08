import type { PageServerLoad } from "./$types";
import { BlogService, type IBlogPost } from "$lib/services/blog";

export const load: PageServerLoad = async () => {
    let bugzFavPosts: IBlogPost[] = [];

    try {
        const blogService = new BlogService();

        bugzFavPosts = await blogService.getBugzFavoritePosts();
    } catch {
        // swallowing error
    }

    return {
        bugzFavPosts,
    };
};