import { HttpsProxyAgent } from 'https-proxy-agent';
import type { RequestInit } from 'node-fetch';
import fetch from 'node-fetch';

import { delay } from '../tools/delay';

export class NotFoundError extends Error {}

export const getWithRetry = async (url: string, options: RequestInit, retryCount = 3, skip_not_found = true): Promise<any> => {
    try {
        if (process.env.ENV === 'local') {
            const httpAgent = new HttpsProxyAgent(process.env.LOCAL_PROXY ?? 'http://127.0.0.1:7890');
            options.agent = httpAgent;
        }

        const response = await fetch(url, options);
        if (!response.ok) {
            if (response.status === 429) {
                await delay(70 * 1000);
            }
            if (response.status === 404) {
                throw new NotFoundError();
            }
            throw new Error(`Error! status: ${response.status}`);
        }
        return response;
    } catch (e: any) {
        if (e instanceof NotFoundError && skip_not_found) {
            throw e;
        }
        if (retryCount <= 0) {
            throw e;
        }
        await delay(1000);
        return await getWithRetry(url, options, retryCount - 1);
    }
};
