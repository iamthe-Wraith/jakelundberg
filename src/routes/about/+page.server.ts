import type { PageServerLoad } from "./$types";
import { MeService, type IFavorite, type IGoal, type IHobby } from "$lib/services/me";

interface IFavorites {
    movies: IFavorite[];
    shows: IFavorite[];
    games: IFavorite[];
}

export const load: PageServerLoad = async ({ locals }) => {
    const favorites: IFavorites = {
        movies: [],
        shows: [],
        games: [],
    };
    let goals: IGoal[] = [];
    let hobbies: IHobby[] = [];

    try {
        const meService = new MeService(locals.sanity);
        
        const [movies, shows, games, _goals, _hobbies] = await Promise.allSettled([
            meService.getFavoriteMovies(),
            meService.getFavoriteShows(),
            meService.getFavoriteGames(),
            meService.getGoals(),
            meService.getHobbies(),
        ]);

        if (movies.status === 'fulfilled') {
            favorites.movies = movies.value;
        }

        if (shows.status === 'fulfilled') {
            favorites.shows = shows.value;
        }

        if (games.status === 'fulfilled') {
            favorites.games = games.value;
        }

        if (_goals.status === 'fulfilled') {
            goals = _goals.value;
        }

        if (_hobbies.status === 'fulfilled') {
            hobbies = _hobbies.value;
        }
    } catch {
        // swallowing error
    }

    return {
        favorites,
        goals,
        hobbies,
    };
};