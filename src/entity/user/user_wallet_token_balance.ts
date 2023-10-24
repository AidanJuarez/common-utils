import BigNumber from 'bignumber.js';

import { type BaseAttrs, BaseEntity } from '../base';

interface UserWalletTokenBalaneAttr extends BaseAttrs {
    token_address: string;
    decimals: number;
    wallet_address: string;
    amount: BigNumber;
    volume: BigNumber;
}

export class UserWalletTokenBalance extends BaseEntity implements UserWalletTokenBalaneAttr {
    declare token_address: string;
    declare decimals: number;
    declare wallet_address: string;
    declare amount: BigNumber;
    declare volume: BigNumber;

    constructor(attrs?: Partial<UserWalletTokenBalaneAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const balance = new UserWalletTokenBalance();
        const result = UserWalletTokenBalance.tryParseJSON(json);
        if (result === null) {
            return balance;
        }

        if (result.token_address !== undefined) {
            balance.token_address = result.token_address;
        }
        if (result.decimals !== undefined) {
            balance.decimals = result.decimals;
        }
        if (result.wallet_address !== undefined) {
            balance.wallet_address = result.wallet_address;
        }
        if (result.amount !== undefined) {
            balance.amount = new BigNumber(result.amount);
        }
        if (result.volume !== undefined) {
            balance.volume = new BigNumber(result.volume);
        }

        return balance;
    }

    public static fromJsonArray(json: any[]) {
        const result: UserWalletTokenBalance[] = [];
        for (const item of json) {
            result.push(UserWalletTokenBalance.fromJson(item));
        }
        return result;
    }
}
