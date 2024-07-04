interface IProject {
    id: number;
    title: string;
    url: string;
    image: string|null,
    summary: string;
    links: string[];
    tags: string[];
    featured: boolean;

}

export class ProjectsService {
    private projects: IProject[] = [
        {
            id: 5,
            title: 'BuzyBee',
            url: 'https://buzybee.buzz',
            image: null,
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 4,
            title: 'Wraithcode',
            url: 'https://wraithcode.io',
            image: null,
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 3,
            title: 'jakelunderg.dev',
            url: 'https://jakelunderg.dev',
            image: null,
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 2,
            title: 'YumYum Recipes',
            url: 'https://yumyum.wraithcode.io',
            image: null,
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 1,
            title: 'Igor',
            url: 'https://github.com/iamthe-Wraith/igor',
            image: null,
            summary: '',
            links: [],
            tags: [],
            featured: true,
        }
    ];

    async getProjects(): Promise<IProject[]> {
        // TODO: store projects in a database and fetch them here
        return this.projects
    }
}
