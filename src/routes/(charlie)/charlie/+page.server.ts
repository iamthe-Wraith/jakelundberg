import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import type { Actions } from './$types';
import { Logger } from "$lib/services/logger";
import { CharlieService } from "$lib/services/charlie";

export const actions: Actions = {
    signin: async ({ request }) => {
        const charlie = new CharlieService();
        const data = await request.formData();
        const pin = parseInt(data.get('pin')! as string);

        try {
            const response = await charlie.post({
                url: '/wraith-manor/charlie/signin',
                body: { pin },
            });
    
            if (response.ok) {
                const res = await response.json();

                return {
                    status: 200,
                    ...res,
                };
            } else {
                const res = await response.json();

                Logger.error('wraith manor mystery api error', res);

                return fail(response.status, { message: 'Something went wrong' });
            }
        } catch (err: unknown) {
            Logger.error('Wraith Manor mystery api error', err);
        }
    },
};

export const load: PageServerLoad = async () => {
    return {
        charlie: {
            version: "v2.0.14",
        }
    }
};