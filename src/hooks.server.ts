import { sequence } from "@sveltejs/kit/hooks";
import { loadSanityClient } from "./hooks/sanity";

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(
	loadSanityClient
);
