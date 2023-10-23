import { delay } from './delay';

export async function retry<T>(fn: () => Promise<T>, times: number, delay_ms: number): Promise<T> {
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === times - 1) {
                throw err;
            }
            if (delay_ms > 0) {
                await delay(delay_ms);
            }
        }
    }
    throw new Error('execution failed');
}
