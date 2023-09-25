import { type BaseAttrs, BaseEntity } from '../base';
import { UserSetting } from './user_setting';

interface UserWalletAttr extends BaseAttrs {
    chat_id: string;
    chain: string;
    wallet_address: string;
    private_key: string;
    name: string;
    settings: UserSetting;
    is_default: number;
    status: number;
    create_at: number;
}

export class UserWallet extends BaseEntity implements UserWalletAttr {
    declare chat_id: string;
    declare chain: string;
    declare wallet_address: string;
    declare private_key: string;
    declare name: string;
    declare settings: UserSetting;
    declare is_default: number;
    declare status: number;
    declare create_at: number;

    constructor(attrs?: Partial<UserWalletAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: string | object) {
        const wallet = new UserWallet();
        const result = UserWallet.tryParseJSON<UserWallet>(json);
        if (result === null) {
            return wallet;
        }

        if (result.chat_id !== undefined) {
            wallet.chat_id = result.chat_id;
        }
        if (result.chain !== undefined) {
            wallet.chain = result.chain;
        }
        if (result.wallet_address !== undefined) {
            wallet.wallet_address = result.wallet_address;
        }
        if (result.private_key !== undefined) {
            wallet.private_key = result.private_key;
        }
        if (result.name !== undefined) {
            wallet.name = result.name;
        }
        if (result.settings !== undefined) {
            wallet.settings = UserSetting.fromJson(result.settings);
        }
        if (result.is_default !== undefined) {
            wallet.is_default = result.is_default;
        }
        if (result.status !== undefined) {
            wallet.status = result.status;
        }
        if (result.create_at !== undefined) {
            wallet.create_at = result.create_at;
        }
        return wallet;
    }

    public toJson() {
        return JSON.stringify(this);
    }
}
