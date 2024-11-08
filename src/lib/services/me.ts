import type { SanityClient } from "@sanity/client";
import { CMSService } from "./cms-service";

export const FavoriteType = {
    Movie: 'movie',
    Show: 'show',
    Game: 'game',
} as const;

export interface IFavorite {
    id: number;
    rank: number;
    title: string;
    url: string|null;
    image: string|null;
    description: string|null;
    favoriteType: typeof FavoriteType[keyof typeof FavoriteType];   
}

export interface IGoal {
    id: string;
    name: string;
    completed: boolean;
    description: string;
}

export interface IHobby {
    id: string;
    name: string;
    description: string;
}

export class MeService extends CMSService {
    public constructor(client: SanityClient) {
        super(client);
    }   

    /**
     * Get all my favorite things.
     * 
     * @returns {IFavorites} An object containing favorite books, movies, tv shows, and games
     */
    public getAllFavorites = async (): Promise<IFavorite[]> => {
        return this.fetch(this.renderFavoriteQuery());
    }

    /**
     * Get an array of my favorite movies.
     * 
     * @returns {IFavorite[]} An array of movies
     */
    public getFavoriteMovies = async (): Promise<IFavorite[]> => {
        return this.fetch(this.renderFavoriteQuery(FavoriteType.Movie));
    }

    /**
     * Get an array of my favorite tv shows.
     * 
     * @returns {IFavorite[]} An array of tv shows
     */
    public getFavoriteShows = async (): Promise<IFavorite[]> => {
        return this.fetch(this.renderFavoriteQuery(FavoriteType.Show));
    }

    /**
     * Get an array of my favorite games.
     * 
     * @returns {IFavorite[]} An array of games
     */
    public getFavoriteGames = async (): Promise<IFavorite[]> => {
        return this.fetch(this.renderFavoriteQuery(FavoriteType.Game));
    }

    /**
     * Get an array of my goals.
     * 
     * @returns {IGoal[]} An array of goals
     */
    public getGoals = async (): Promise<IGoal[]> => {
        return this.fetch(this.renderGoalQuery());
    }

    /**
     * Get an array of my hobbies.
     * 
     * @returns {IHobby[]} An array of hobbies
     */
    public getHobbies = async (): Promise<IHobby[]> => {
        return this.fetch(this.renderHobbyQuery());
    }

    private renderFavoriteQuery = (type?: typeof FavoriteType[keyof typeof FavoriteType]) => {
        return `
            *[_type == "favorite"${type ? `&& favoriteType == "${type}"` : ''}]
            | order(rank asc)
            {
                "id": _id, 
                rank, 
                title, 
                url, 
                image, 
                description, 
                favoriteType
            }`;
    }

    private renderGoalQuery = () => {
        return `*[_type == "goal"] { "id": _id, name, completed, description }`;
    }

    private renderHobbyQuery = () => {
        return `*[_type == "hobby"] { "id": _id, name, description }`;
    }
}
