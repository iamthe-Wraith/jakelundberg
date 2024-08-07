import { DEV_TO_API_KEY } from "$env/static/private";

export interface IBlogPostUser {
    github_username: string;
    name: string;
    profile_image: string;
    profile_image_90: string;
    twitter_username: string;
    user_id: number;
    username: string;
    website_url: string;
}

export interface IBlogPost {
    body_markdown: string;
    canonical_url: string;
    comments_count: number;
    cover_image: string;
    description: string;
    id: string;
    page_views_count: number;
    path: string;
    positive_reactions_count: string;
    public_reactions_count: number;
    published: boolean;
    published_at: string;
    published_timestamp: string;
    reading_time_minutes: number;
    slug: string;
    tags?: string[]; // not always returned by API
    tag_list: string[]; // is sometimes returned as a string by API
    title: string;
    type_of: string;
    url: string;
    user: IBlogPostUser;
}

export class BlogService {
    public getBugzFavoritePosts = async (): Promise<IBlogPost[]> => {
        const ids = ['1885514', '1688057', '1639828'];
        const posts = await Promise.all(ids.map(id => this.getPostById(id)));

        // this endpoint returns this data in a different structure
        // than other endpoints, so need to map it to the same structure
        // used by app
        return posts.map(post => {
            if (post.tags && Array.isArray(post.tags)) {
                post.tag_list = post.tags;
            }

            return post;
        })
    }

    public getPosts = async (page = 1, perPage = 10): Promise<IBlogPost[]> => {
        const res = await fetch(`https://dev.to/api/articles/me?page=${page}&per_page=${perPage}`, {
            headers: {
                'api-key': DEV_TO_API_KEY,
                'Content-Type': 'application/json'
            }
        });
    
        const posts = await res.json();
        return (posts ?? []).filter((post: IBlogPost) => post.type_of === 'article');
    }

    public getPostById = async (id: string): Promise<IBlogPost> => {
        const res = await fetch(`https://dev.to/api/articles/${id}`, {
            headers: {
                'api-key': DEV_TO_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        return res.json();
    }
}
