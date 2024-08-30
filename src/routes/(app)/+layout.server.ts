import type { LayoutServerLoad } from './$types';
import { getDevice, type IDevice } from '$lib/utils/device';

interface IData {
	device?: IDevice;
}

export const load: LayoutServerLoad = (async ({ request }) => {
	const data: IData = {};

	try {
		data.device = getDevice(request.headers.get('user-agent')!);
	} catch (err: unknown) {
		console.log('Error in layout data retrieval', err);
		// processError(err as Error, () => {
		// 	console.error('Error in layout data retrieval');
		// 	console.error(err);
		// });
	}

	return data;
});
