import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async () => {
    const experiments = [
		{
			name: 'Desktop Notifications',
			route: '/the-lab/experiments/desktop-notifications',
			timestamp: dayjs('Wed Jun 12 2024 10:58:37 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
			description: 'A small experiment using the Notifications Web API.',
			links: [
				{
					text: 'View on Github',
					url: 'https://github.com/iamthe-Wraith/',
					icon: 'fa-brands fa-github'
				}
			]
		}
	];

    return { experiments };
};