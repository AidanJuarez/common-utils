import type BigNumber from 'bignumber.js';

import { type BaseAttrs, BaseEntity } from '../base';

interface PoolAttr extends BaseAttrs {
    pool_id: number;
    chain: string;
    pool_address: string;
    dex: string;
    version: string;
    base_token_decimals: number;
    base_token_address: string;
    quote_token_decimals: number;
    quote_token_address: string;
    price_usd: BigNumber;
    price_native: BigNumber;
    price_change_24h: BigNumber;
    liquidity_usd: BigNumber;
    liquidity_quote: BigNumber;
    volumes_24h: BigNumber;
    create_at: string;
}

export class Pool extends BaseEntity implements PoolAttr {
    declare pool_id: number;
    declare chain: string;
    declare pool_address: string;
    declare dex: string;
    declare version: string;
    declare base_token_decimals: number;
    declare base_token_address: string;
    declare quote_token_decimals: number;
    declare quote_token_address: string;
    declare price_usd: BigNumber;
    declare price_native: BigNumber;
    declare price_change_24h: BigNumber;
    declare liquidity_usd: BigNumber;
    declare liquidity_quote: BigNumber;
    declare volumes_24h: BigNumber;
    declare create_at: string;

    constructor(attrs?: Partial<PoolAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const pool = new Pool();
        const result = Pool.tryParseJSON<Pool>(json);
        if (result === null) {
            return pool;
        }

        if (result.pool_id !== undefined) {
            pool.pool_id = result.pool_id;
        }
        if (result.chain !== undefined) {
            pool.chain = result.chain;
        }
        if (result.pool_address !== undefined) {
            pool.pool_address = result.pool_address;
        }
        if (result.dex !== undefined) {
            pool.dex = result.dex;
        }
        if (result.version !== undefined) {
            pool.version = result.version;
        }
        if (result.base_token_decimals !== undefined) {
            pool.base_token_decimals = result.base_token_decimals;
        }
        if (result.base_token_address !== undefined) {
            pool.base_token_address = result.base_token_address;
        }
        if (result.quote_token_decimals !== undefined) {
            pool.quote_token_decimals = result.quote_token_decimals;
        }
        if (result.quote_token_address !== undefined) {
            pool.quote_token_address = result.quote_token_address;
        }
        if (result.price_usd !== undefined) {
            pool.price_usd = result.price_usd;
        }
        if (result.price_native !== undefined) {
            pool.price_native = result.price_native;
        }
        if (result.price_change_24h !== undefined) {
            pool.price_change_24h = result.price_change_24h;
        }
        if (result.liquidity_usd !== undefined) {
            pool.liquidity_usd = result.liquidity_usd;
        }
        if (result.liquidity_quote !== undefined) {
            pool.liquidity_quote = result.liquidity_quote;
        }

        if (result.volumes_24h !== undefined) {
            pool.volumes_24h = result.volumes_24h;
        }
        if (result.create_at !== undefined) {
            pool.create_at = result.create_at;
        }
        return pool;
    }
}
