
import type { Handle } from '@sveltejs/kit';
import {createClient} from "@sanity/client";

export const loadSanityClient: Handle = async ({ event, resolve }) => {
    event.locals.sanity = createClient({
        projectId: "vb236evh",
        dataset: "production",
        apiVersion: "2024-07-06",
        useCdn: false,
    });

    return resolve(event);
};
