import { providers } from 'ethers';
import { defineReadOnly } from 'ethers/lib/utils';

export class Provider extends providers.JsonRpcProvider {
    urls: string[] = [];
    index = 0;
    max = 0;
    constructor(urls: string[]) {
        super(urls[0]);
        this.urls = urls;
        this.max = urls.length;
    }

    send(method: string, params: any[]): Promise<any> {
        const retry = 3;
        for (let i = 0; i < retry; i++) {
            try {
                return super.send(method, params);
            } catch (error: any) {
                const statusCode = error.status ?? 0;
                if (statusCode === 429) {
                    defineReadOnly(
                        this,
                        'connection',
                        Object.freeze({
                            url: this.next()
                        })
                    );
                    continue;
                }
            }
        }
        throw new Error('Provider send error');
    }

    next(): string {
        this.index = (this.index + 1) % this.max;
        return this.urls[this.index];
    }
}
