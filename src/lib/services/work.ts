import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { CMSService } from './cms-service';
import type { SanityClient } from '@sanity/client';
import type { InputValue } from '@portabletext/svelte';

dayjs.extend(utc);

export interface ITech {
    id: string;
    name: string;
    description: string | null;
    url: string;
    image: string | null;
}

export interface IJob {
    id: number;
    position: string;
    companyName: string;
    url: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    summary: InputValue;
    tech: ITech[];
}

export class WorkService extends CMSService {
    public constructor(client: SanityClient) {
        super(client);
    }   

    public getJobs = async (): Promise<IJob[]> => {
        return this.fetch(this.renderWorkQuery());
    }

    private renderWorkQuery = () => {
        return `
            *[_type == "job"]
            | order(startDate desc)
            {
                "id": _id,
                companyName,
                position,
                location,
                url,
                startDate,
                endDate,
                summary,
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
