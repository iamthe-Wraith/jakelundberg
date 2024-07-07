import type { PageServerLoad } from "./$types";
import { LibraryService, type IBook } from "$lib/services/library";

interface IBooks {
    unread: IBook[];
    read: IBook[];
    currentReading: IBook[];
}

export const load: PageServerLoad = async ({ locals }) => {
    const books: IBooks = {
        unread: [],
        read: [],
        currentReading: [],
    };

    try {
        const libraryService = new LibraryService(locals.sanity);
        
        const [unread, read, currentlyReading] = await Promise.allSettled([
            libraryService.getUnreadBooks(),
            libraryService.getBooksRead(),
            libraryService.getCurrentlyReading(),
        ]);

        if (unread.status === 'fulfilled') {
            books.unread = unread.value;
        }

        if (read.status === 'fulfilled') {
            books.read = read.value;
        }

        if (currentlyReading.status === 'fulfilled') {
            books.currentReading = currentlyReading.value;
        }
    } catch {
        // swallowing error
    }

    return {
        books,
    };
};