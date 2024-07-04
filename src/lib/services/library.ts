export interface IBook {
    id: number;
    title: string;
    url: string|undefined;
    image: string|undefined;
    summary: string|undefined;
    tags: string[];
    currentlyReading: boolean;
    read: boolean;
}

export class LibraryService {
    private books: IBook[] = [];
    // TODO: add other resource types like blog posts, videos, etc.

    /**
     * Get an array of books by their ids.
     * 
     * If an id is not found, it will be ignored.
     * 
     * @param {number[]} - ids An array of book ids
     * @returns {IBook[]} An array of books
     */
    async getBooksByIds(ids: number[]): Promise<IBook[]> {
        // TODO: store books in a database and fetch them here
        return this.books.filter(book => book.id in ids);
    }

    /**
     * Get an array of books I've read
     * 
     * @returns {IBook[]} An array of books
     */
    async getBooksRead(): Promise<IBook[]> {
        // TODO: store books in a database and fetch them here
        return this.books.filter(book => book.read);
    }

    /**
     * Get the books on my reading list that I have not read yet.
     * 
     * @returns {IBook[]} An array of books
     */
    async getUnreadBooks(): Promise<IBook[]> {
        // TODO: store books in a database and fetch them here
        return this.books.filter(book => !book.read);
    }

    /**
     * Get the books I'm currently reading.
     *  
     * @returns {IBook[]} An array of books
     */
    async getCurrentlyReading(): Promise<IBook[]> {
        // TODO: store books in a database and fetch currently reading here
        return this.books.filter(book => book.currentlyReading);
    }
}
