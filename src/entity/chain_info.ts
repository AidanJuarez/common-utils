import BigNumber from 'bignumber.js';

import type { BaseAttrs } from './base';
import { BaseEntity } from './base';

interface ChainInfoAttr extends BaseAttrs {
    gas_price: BigNumber;
    block_number: number;
    main_token_price: BigNumber;
}

export class ChainInfo extends BaseEntity implements ChainInfoAttr {
    gas_price = new BigNumber(0);
    block_number = 0;
    main_token_price = new BigNumber(0);

    constructor(attrs?: Partial<ChainInfoAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const chainInfo = new ChainInfo();
        json = ChainInfo.tryParseJSON(json);

        if (json.gas_price !== undefined) {
            chainInfo.gas_price = new BigNumber(json.gas_price);
        }

        if (json.block_number !== undefined) {
            chainInfo.block_number = json.block_number;
        }

        if (json.main_token_price !== undefined) {
            chainInfo.main_token_price = new BigNumber(json.main_token_price);
        }

        return chainInfo;
    }

    public toJson() {
        return JSON.stringify(this);
    }
}
