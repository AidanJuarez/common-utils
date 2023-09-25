import BigNumber from 'bignumber.js';
import moment from 'moment';

export function checkInput(input: string): boolean {
    return input !== undefined && input !== null && input !== '';
}

export function formatTokenAddress(token_address: string): string {
    return `${token_address.slice(0, 6)}...${token_address.slice(-6)}`;
}

export function formatUsdValue(value: BigNumber): string {
    value = new BigNumber(value);
    if (value.lt(0.01)) {
        return value.toPrecision(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    }
    if (value.lt(1)) {
        return value.toPrecision(4).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else if (value.lt(1000)) {
        return value.toFixed(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else if (value.lt(1000_000)) {
        return `${value
            .div(1000)
            .toFixed(2)
            .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}K`;
    }
    return `${value
        .div(1000_000)
        .toFixed(2)
        .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}M`;
}

export function formatPercentage(value: BigNumber): string {
    value = new BigNumber(value);
    return value.toFixed(2);
}

export function formatTokenValue(value: BigNumber): string {
    value = new BigNumber(value);
    if (value.lt(0.01)) {
        return value.toPrecision(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    }
    if (value.lt(1)) {
        return value.toPrecision(4).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else if (value.lt(1000)) {
        return value.toFixed(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else if (value.lt(1000_000)) {
        return `${value
            .div(1000)
            .toFixed(2)
            .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}K`;
    } else if (value.lt(1000_000_000)) {
        return `${value
            .div(1000_000)
            .toFixed(2)
            .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}M`;
    } else if (value.lt(1000_000_000_000)) {
        return `${value
            .div(1000_000_000)
            .toFixed(2)
            .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}B`;
    }

    return `${value
        .div(1000_000_000_000)
        .toFixed(2)
        .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}T`;
}

export function formatPrice(value: BigNumber): string {
    value = new BigNumber(value);
    if (value.lt(0.01)) {
        return value.toPrecision(4).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    }
    if (value.lt(1)) {
        return value.toPrecision(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else {
        return value.toFixed(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    }
}

export function calculatePriceByPercentage(base_price: BigNumber, percentage: BigNumber): BigNumber {
    const price = base_price.times(percentage.div(100).plus(1));
    return new BigNumber(formatPrice(price));
}

export function formatTimestampToDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return moment(date.toUTCString()).format('MM-DD HH:mm');
}

export function showPercentage(value: BigNumber): string {
    if (value.gt(0)) {
        return `+${value.toFixed(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}%`;
    }
    return `${value.toFixed(2).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')}%`;
}

export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

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
