import { json } from '@sveltejs/kit';
import { ApiResponse } from '$lib/utils/api-response.js';
import { ApiError } from '$lib/utils/api-error.js';
import { MeService } from '$lib/services/me.js';

export const GET = async ({ locals }) => {
    try {
        const meService = new MeService(locals.sanity);
        const games = await meService.getFavoriteGames();
        return json(games);
    } catch (err) {
        const response = new ApiResponse({ errors: ApiError.parse(err) });
        const message = response.errors?.[0].message || 'Uh oh, something went wrong.';
        return new Response(message, { status: response.statusCode });
    }
}