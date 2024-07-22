import { json } from '@sveltejs/kit';
import { ApiResponse } from '$lib/utils/api-response.js';
import { ApiError } from '$lib/utils/api-error.js';
import { LibraryService } from '$lib/services/library.js';

export const GET = async ({ locals }) => {
    try {
        const libraryService = new LibraryService(locals.sanity);
        const unreadBooks = await libraryService.getUnreadBooks();
        return json(unreadBooks);
    } catch (err) {
        const response = new ApiResponse({ errors: ApiError.parse(err) });
        const message = response.errors?.[0].message || 'Uh oh, something went wrong.';
        return new Response(message, { status: response.statusCode });
    }
}