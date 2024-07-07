import type { SanityClient } from "@sanity/client";
import { Logger } from "./logger";

export class CMSService {
    private client: SanityClient;

    public constructor(client: SanityClient) {
        this.client = client;
    }

    public fetch<T>(query: string): Promise<T> {
        try {
            return this.client.fetch(query);
        } catch (err: unknown) {
            Logger.error((err as Error).message);
            throw err;
        }
    }
}