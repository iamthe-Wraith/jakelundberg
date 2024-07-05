import { LibraryService, type IBook } from "./library";

export const FavoriteType = {
    Movie: 'movie',
    TvShow: 'tvShow',
    Game: 'game',
} as const;

export interface IFavorite {
    id: number;
    rank: number;
    title: string;
    url: string|undefined;
    image: string|undefined;
    summary: string|undefined;
    tags: string[];
    type: typeof FavoriteType[keyof typeof FavoriteType];   
}

export interface IHobby {
    name: string;
    description: string;
}

export class MeService {
    private favoriteBooks: number[] = [];
    private favorites: IFavorite[] = [
        // movies
        {
            id: 1,
            rank: 1,
            title: 'Ironman',
            url: 'https://www.imdb.com/title/tt0371746/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/ironman_dycsip.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 2,
            rank: 2,
            title: 'Free Guy',
            url: 'https://www.imdb.com/title/tt6264654/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/free-guy_ndhhaa.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 3,
            rank: 3,
            title: 'Big Hero 6',
            url: 'https://www.imdb.com/title/tt2245084/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/big-hero-6_nmb0ou.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 4,
            rank: 4,
            title: 'Jurassic Park',
            url: 'https://www.imdb.com/title/tt0107290/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130940/jurassic-park_vcdsrr.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 5,
            rank: 5,
            title: 'The Nun',
            url: 'https://www.imdb.com/title/tt5814060/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/the-nun_ngpecr.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 5,
            rank: 5,
            title: 'Ready Player One',
            url: 'https://www.imdb.com/title/tt1677720/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/ready-player-one_zjkon4.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 6,
            rank: 6,
            title: 'Nightmare Before Christmas',
            url: 'https://www.imdb.com/title/tt0107688/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/nightmare-before-christmas_dhpapj.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 7,
            rank: 7,
            title: 'The Emoji Movie',
            url: 'https://www.imdb.com/title/tt4877122/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/the-emoji-movie_h3oyed.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        {
            id: 8,
            rank: 8,
            title: 'John Wick',
            url: 'https://www.imdb.com/title/tt2911666/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130939/john-wick_jtdeqc.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Movie,
        },
        // tv  shows
        {
            id: 9,
            rank: 1,
            title: 'Big Bang Theory',
            url: 'https://www.imdb.com/title/tt0898266/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130950/big-bang-theory_kme1qn.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 10,
            rank: 2,
            title: 'Parks and Rec',
            url: 'https://www.imdb.com/title/tt1266020/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130950/parks-and-rec_chvl31.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 11,
            rank: 3,
            title: 'Psych',
            url: 'https://www.imdb.com/title/tt0491738/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130950/psych_m0ft4w.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 12,
            rank: 4,
            title: 'The Office',
            url: 'https://www.imdb.com/title/tt0386676/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130951/the-office_excyyu.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 13,
            rank: 5,
            title: 'White Collar',
            url: 'https://www.imdb.com/title/tt1358522/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130952/white-collar_jhof4c.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 14,
            rank: 6,
            title: 'Fringe',
            url: 'https://www.imdb.com/title/tt1119644/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130950/fringe_nmy9uq.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 15,
            rank: 7,
            title: 'Bones',
            url: 'https://www.imdb.com/title/tt0460627/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130950/bones_scmz0u.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 16,
            rank: 8,
            title: 'Supernatural',
            url: 'https://www.imdb.com/title/tt0460681/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130951/supernatural_ytroli.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        {
            id: 17,
            rank: 9,
            title: 'What We Do in the Shadows',
            url: 'https://www.imdb.com/title/tt7908628/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720130952/what-we-do-in-the-shadows_mxsjr6.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.TvShow,
        },
        // games
        {
            id: 18,
            rank: 1,
            title: 'Skyrim',
            url: 'https://elderscrolls.bethesda.net/en/skyrim10',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131015/skyrim_wbqbkx.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 19,
            rank: 2,
            title: 'Everquest',
            url: 'https://www.everquest.com/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131016/everquest_lto7i3.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 20,
            rank: 3,
            title: 'Gran Turismo',
            url: 'https://www.gran-turismo.com/us/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131011/gran-turismo_gfkd81.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 21,
            rank: 4,
            title: 'Risk',
            url: 'https://en.wikipedia.org/wiki/Risk_(game)',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_200/v1720131013/risk_dvlm2j.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 22,
            rank: 5,
            title: 'Chess',
            url: 'https://en.wikipedia.org/wiki/Chess',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131011/chess_jrzb0j.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 23,
            rank: 6,
            title: 'Scrap Mechanic',
            url: 'https://www.scrapmechanic.com/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131014/scrap-mechanic_sewtmc.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 24,
            rank: 7,
            title: 'Minecraft',
            url: 'https://www.minecraft.net/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131012/minecraft_k7f1qv.png',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 25,
            rank: 8,
            title: 'Pokemon Go',
            url: 'https://pokemongolive.com/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131013/pokemon-go_fnnumy.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game,
        },
        {
            id: 26,
            rank: 9,
            title: 'Joking Hazard',
            url: 'https://www.jokinghazardgame.com/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131012/joking-hazard_eztmmd.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game
        },
        {
            id: 27,
            rank: 10,
            title: 'Dungeons & Dragons',
            url: 'https://dnd.wizards.com/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131011/dnd_zqhgz2.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game
        },
        {
            id: 28,
            rank: 11,
            title: 'Zelda',
            url: 'https://www.zelda.com/',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131015/zelda_whvrkj.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game
        },
        {
            id: 29,
            rank: 12,
            title: 'Poker (Texas Hold\'em)',
            url: 'https://en.wikipedia.org/wiki/Texas_hold_%27em',
            image: 'https://res.cloudinary.com/dxpwpno1e/image/upload/c_scale,w_400/v1720131013/poker_xfwegd.jpg',
            summary: '',
            tags: [],
            type: FavoriteType.Game
        }
    ];
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
        return this.favorites.filter(favorite => favorite.type === FavoriteType.Movie);
    }

    /**
     * Get an array of my favorite tv shows.
     * 
     * @returns {IFavorite[]} An array of tv shows
     */
    async getFavoriteTvShows(): Promise<IFavorite[]> {
        // TODO: store favorites in a database and fetch them here
        return this.favorites.filter(favorite => favorite.type === FavoriteType.TvShow);
    }

    /**
     * Get an array of my favorite games.
     * 
     * @returns {IFavorite[]} An array of games
     */
    async getFavoriteGames(): Promise<IFavorite[]> {
        // TODO: store favorites in a database and fetch them here
        return this.favorites.filter(favorite => favorite.type === FavoriteType.Game);
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
