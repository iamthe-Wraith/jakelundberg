import type { InputValue } from "@portabletext/svelte";
import type { SanityClient } from "@sanity/client";
import { CMSService, type ITech } from "./cms-service";

export interface IProject {
    id: number;
    rank: number;
    name: string;
    url: string;
    links: string[];
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
            | order(rank desc)
            {
                "id": _id,
                rank,
                name,
                url,
                links,
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
