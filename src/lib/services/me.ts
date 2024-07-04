import { LibraryService, type IBook } from "./library";

export interface IFavorite {
    id: number;
    title: string;
    url: string|undefined;
    image: string|undefined;
    summary: string|undefined;
    tags: string[];
    type: 'book'|'movie'|'tvShow'|'game';
}

export interface IHobby {
    name: string;
    description: string;
}

export class MeService {
    private favoriteBooks: number[] = [];
    private favorites: IFavorite[] = [];
    private hobbies: IHobby[] = [];

    /**
     * Get all my favorite things.
     * 
     * @returns {IFavorites} An object containing favorite books, movies, tv shows, and games
     */
    async getAllFavorites(): Promise<IFavorite[]> {
        // TODO: store favorites in a database and fetch them here
        return this.favorites;
    }

    /**
     * Get an array of my favorite books.
     * 
     * @returns {IBook[]} An array of books
     */
    async getFavoriteBooks(): Promise<IBook[]> {
        const libraryService = new LibraryService();
        return await libraryService.getBooksByIds(this.favoriteBooks);
    }

    /**
     * Get an array of my favorite movies.
     * 
     * @returns {IFavorite[]} An array of movies
     */
    async getFavoriteMovies(): Promise<IFavorite[]> {
        // TODO: store favorites in a database and fetch them here
        return this.favorites.filter(favorite => favorite.type === 'movie');
    }

    /**
     * Get an array of my favorite tv shows.
     * 
     * @returns {IFavorite[]} An array of tv shows
     */
    async getFavoriteTvShows(): Promise<IFavorite[]> {
        // TODO: store favorites in a database and fetch them here
        return this.favorites.filter(favorite => favorite.type === 'tvShow');
    }

    /**
     * Get an array of my favorite games.
     * 
     * @returns {IFavorite[]} An array of games
     */
    async getFavoriteGames(): Promise<IFavorite[]> {
        // TODO: store favorites in a database and fetch them here
        return this.favorites.filter(favorite => favorite.type === 'game');
    }

    /**
     * Get an array of my hobbies.
     * 
     * @returns {IHobby[]} An array of hobbies
     */
    async getHobbies(): Promise<IHobby[]> {
        // TODO: store hobbies in a database and fetch them here
        return this.hobbies;
    }
}
