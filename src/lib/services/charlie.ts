import { MYSTERY_INC_API_KEY, MYSTERY_INC_API_URL } from "$env/static/private";

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IFetchRequest {
    url: string;
    headers?: Record<string, unknown>;
}

interface IFetchRequestWithBody extends IFetchRequest {
    body?: Record<string, unknown>;
}

export class CharlieService {
    public delete = async ({ url, headers = {}, body }: IFetchRequestWithBody) => {
        return this.fetch({ method: 'DELETE', url, headers, body });
    }

    public get = async ({ url, headers = {} }: IFetchRequest) => {
        return this.fetch({ method: 'GET', url, headers });
    }

    public post = async ({ url, headers = {}, body = {} }: IFetchRequestWithBody) => {
        return this.fetch({ method: 'POST', url, headers, body });
    }

    public put = async ({ url, headers = {}, body = {} }: IFetchRequestWithBody) => {
        return this.fetch({ method: 'PUT', url, headers, body });
    }

    private fetch = async ({ method, url, headers = {}, body }: IFetchRequestWithBody & { method: FetchMethod }) => {
        return fetch(`${MYSTERY_INC_API_URL}${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': MYSTERY_INC_API_KEY,
                ...headers,
            },
            body: JSON.stringify(body),
        });
    }
}