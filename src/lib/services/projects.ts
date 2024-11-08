import type { InputValue } from "@portabletext/svelte";
import type { SanityClient } from "@sanity/client";
import { CMSService, type ITech } from "./cms-service";

export interface IProjectLink {
    label: string;
    url: string;
}

export interface IProject {
    id: number;
    rank: number;
    name: string;
    url: string;
    image: string;
    links: IProjectLink[];
    summary: InputValue;
    description: InputValue;
    tech: ITech[];
}

export class ProjectsService extends CMSService {
    public constructor(client: SanityClient) {
        super(client);
    }

    public getProjects = async (): Promise<IProject[]> => {
        return this.fetch(this.renderProjectsQuery());
    }

    private renderProjectsQuery = () => {
        return `
            *[_type == "project"]
            | order(rank asc)
            {
                "id": _id,
                rank,
                name,
                url,
                image,
                links[] {
                    label,
                    url,
                },
                summary,
                description,
                tech[]->{
                    "id": _id,
                    name,
                    url,
                    image,
                    description,
                }
            }`;
    }
}
