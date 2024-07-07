import type { SanityClient } from "@sanity/client";

export class CMSService {
    private client: SanityClient;

    public constructor(client: SanityClient) {
        this.client = client;
    }

    public fetch<T>(query: string): Promise<T> {
        return this.client.fetch(query);
    }
}