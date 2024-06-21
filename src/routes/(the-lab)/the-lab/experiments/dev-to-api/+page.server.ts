import { DEV_TO_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

    /**
     * Fetch my 5 latest published articles from dev.to
     * 
     * ℹ️ We are doing this on the server-side because authenticated
     * endpoints are CORS disabled...meaning we cannot make them from
     * the browser.
     */
    const res = await fetch('https://dev.to/api/articles/me/published?per_page=5', {
        headers: {
            /**
             * ℹ️ This is my secrety API key. It's been stored in a .env file
             * and imported here. This is a server-side file, so it's safe to
             * store it here.
             */
            'api-key': DEV_TO_API_KEY,
        }
    });

    const data = await res.json();

    return { articles: data };
};
