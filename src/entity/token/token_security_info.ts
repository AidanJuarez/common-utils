export interface HolderInfo {
    address: string;
    balance: string;
    percent: string;
}

export interface TokenSecurityInfo {
    anti_whale_modifiable: string;
    buy_tax: string;
    cannot_buy: string;
    cannot_sell_all: string;
    can_take_back_ownership: string;
    creator_address: string;
    creator_balance: string;
    creator_percent: string;
    external_call: string;
    hidden_owner: string;
    holder_count: string;
    holders: HolderInfo[];
    honeypot_with_same_creator: string;
    is_anti_whale: string;
    is_blacklisted: string;
    is_honeypot: string;
    is_in_dex: string;
    is_mintable: string;
    is_open_source: string;
    is_proxy: string;
    is_true_token: string;
    is_airdrop_scam: string;
    is_whitelisted: string;
    owner_address: string;
    owner_balance: string;
    owner_change_balance: string;
    owner_percent: string;
    personal_slippage_modifiable: string;
    selfdestruct: string;
    sell_tax: string;
    slippage_modifiable: string;
    token_name: string;
    token_symbol: string;
    total_supply: string;
    trading_cooldown: string;
    transfer_pausable: string;
}
