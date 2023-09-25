import BigNumber from 'bignumber.js';

import type { Chain } from '../../chain';
import { type BaseAttrs, BaseEntity } from '../base';

interface UserMethodSniperOrderAttr extends BaseAttrs {
    order_id: number;
    chain: Chain;
    chat_id: string;
    token_address: string;
    symbol: string;
    method_id: string;
    buy_amount: BigNumber;
    gas_limit: BigNumber;
    create_at: number;
}

export class UserMethodSniperOrder extends BaseEntity implements UserMethodSniperOrderAttr {
    declare order_id: number;
    declare chain: Chain;
    declare chat_id: string;
    declare token_address: string;
    declare symbol: string;
    declare method_id: string;
    declare buy_amount: BigNumber;
    declare gas_limit: BigNumber;
    declare create_at: number;

    constructor(attrs?: Partial<UserMethodSniperOrderAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const order = new UserMethodSniperOrder();
        const result = UserMethodSniperOrder.tryParseJSON<UserMethodSniperOrder>(json);
        if (result === null) {
            return order;
        }

        if (result.order_id !== undefined) {
            order.order_id = result.order_id;
        }
        if (result.chain !== undefined) {
            order.chain = result.chain;
        }
        if (result.chat_id !== undefined) {
            order.chat_id = result.chat_id;
        }
        if (result.token_address !== undefined) {
            order.token_address = result.token_address;
        }
        if (result.symbol !== undefined) {
            order.symbol = result.symbol;
        }
        if (result.method_id !== undefined) {
            order.method_id = result.method_id;
        }
        if (result.buy_amount !== undefined) {
            order.buy_amount = new BigNumber(result.buy_amount);
        }
        if (result.gas_limit !== undefined) {
            order.gas_limit = new BigNumber(result.gas_limit);
        }
        if (result.create_at !== undefined) {
            order.create_at = result.create_at;
        }

        return order;
    }

    public static fromJsonArray(json: any[]) {
        const result: UserMethodSniperOrder[] = [];
        for (const item of json) {
            result.push(UserMethodSniperOrder.fromJson(item));
        }
        return result;
    }
}
