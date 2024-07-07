import type { SanityClient } from "@sanity/client";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sanity: SanityClient;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
