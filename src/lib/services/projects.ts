interface IProject {
    id: number;
    title: string;
    url: string;
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
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 4,
            title: 'Wraithcode',
            url: 'https://wraithcode.io',
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 3,
            title: 'jakelunderg.dev',
            url: 'https://jakelunderg.dev',
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 2,
            title: 'YumYum Recipes',
            url: 'https://yumyum.wraithcode.io',
            summary: '',
            links: [],
            tags: [],
            featured: true,
        },
        {
            id: 1,
            title: 'Igor',
            url: 'https://github.com/iamthe-Wraith/igor',
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
