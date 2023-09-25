import BigNumber from 'bignumber.js';

import { type BaseAttrs, BaseEntity } from '../base';

interface TokenAttr extends BaseAttrs {
    chain: string;
    token_name: string;
    symbol: string;
    decimals: number;
    total_supply: string;
    token_address: string;
    pool_address: string;
    creator_address: string;
    protocol: string;
    tag: string;
    price: BigNumber;
    main_price: BigNumber;
    liquidity: BigNumber;
    liquidity_base: BigNumber;
    liquidity_quote: BigNumber;
    is_main_token: number;
    abi: string;
    security_info: string;
}

export class Token extends BaseEntity implements TokenAttr {
    declare chain: string;
    declare token_name: string;
    declare symbol: string;
    declare decimals: number;
    declare total_supply: string;
    declare token_address: string;
    declare pool_address: string;
    declare creator_address: string;
    declare protocol: string;
    declare tag: string;
    declare price: BigNumber;
    declare main_price: BigNumber;
    declare liquidity: BigNumber;
    declare liquidity_base: BigNumber;
    declare liquidity_quote: BigNumber;
    declare is_main_token: number;
    declare abi: string;
    declare security_info: string;

    constructor(attrs?: Partial<TokenAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const token = new Token();
        const result = Token.tryParseJSON<Token>(json);
        if (result === null) {
            return token;
        }

        if (result.chain !== undefined) {
            token.chain = result.chain;
        }
        if (result.token_name !== undefined) {
            token.token_name = result.token_name;
        }
        if (result.symbol !== undefined) {
            token.symbol = result.symbol;
        }
        if (result.decimals !== undefined) {
            token.decimals = result.decimals;
        }
        if (result.total_supply !== undefined) {
            token.total_supply = result.total_supply;
        }
        if (result.token_address !== undefined) {
            token.token_address = result.token_address;
        }
        if (result.pool_address !== undefined) {
            token.pool_address = result.pool_address;
        }
        if (result.creator_address !== undefined) {
            token.creator_address = result.creator_address;
        }
        if (result.protocol !== undefined) {
            token.protocol = result.protocol;
        }
        if (result.tag !== undefined) {
            token.tag = result.tag;
        }
        if (result.price !== undefined) {
            token.price = new BigNumber(result.price);
        }
        if (result.main_price !== undefined) {
            token.main_price = new BigNumber(result.main_price);
        }
        if (result.liquidity !== undefined) {
            token.liquidity = new BigNumber(result.liquidity);
        }
        if (result.liquidity_base !== undefined) {
            token.liquidity_base = new BigNumber(result.liquidity_base);
        }
        if (result.liquidity_quote !== undefined) {
            token.liquidity_quote = new BigNumber(result.liquidity_quote);
        }
        if (result.is_main_token !== undefined) {
            token.is_main_token = result.is_main_token;
        }
        if (result.abi !== undefined) {
            token.abi = result.abi;
        }
        if (result.security_info !== undefined) {
            token.security_info = result.security_info;
        }

        return token;
    }

    public static fromJsonArray(json: any[]) {
        const result: Token[] = [];
        for (const item of json) {
            result.push(Token.fromJson(item));
        }
        return result;
    }
}
