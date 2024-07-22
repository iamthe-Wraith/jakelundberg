import type { SanityClient } from "@sanity/client";
import { CMSService } from "./cms-service";

export interface IBook {
    id: number;
    title: string;
    url: string|undefined;
    image: string|undefined;
    favorite: boolean;
    currentlyReading: boolean;
    read: boolean;
    summary: string|undefined;
}

export class LibraryService extends CMSService {
    // TODO: add other resource types like blog posts, videos, etc.

    private bookProjection = `{ "id": _id, title, url, image, favorite, currentlyReading, read, summary }`;

    public constructor(client: SanityClient) {
        super(client);
    }

    /**
     * Get an array of books I've read
     * 
     * @returns {IBook[]} An array of books
     */
    async getBooksRead(): Promise<IBook[]> {
        return this.fetch(`*[_type == "book" && read == true] ${this.bookProjection}`)
    }

    /**
     * Get the books I'm currently reading.
     *  
     * @returns {IBook[]} An array of books
     */
    async getCurrentlyReading(): Promise<IBook[]> {
        return this.fetch(`*[_type == "book" && currentlyReading == true] ${this.bookProjection}`)
    }

    /**
     * Get my favorite books.
     *  
     * @returns {IBook[]} An array of books
     */
    async getFavoriteBooks(): Promise<IBook[]> {
        return this.fetch(`*[_type == "book" && favorite == true] ${this.bookProjection}`)
    }

    /**
     * Get the books on my reading list that I have not read yet.
     * 
     * @returns {IBook[]} An array of books
     */
    async getUnreadBooks(): Promise<IBook[]> {
        return this.fetch(`*[_type == "book" && read == false] ${this.bookProjection}`)
    }
}
