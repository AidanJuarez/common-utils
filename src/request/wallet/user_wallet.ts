export interface UserWalletData {
    name?: string | null;
    is_default?: boolean | null;
    settings?: UserWalletSettingData | null;
}

export interface UserWalletSettingData {
    anti_mev?: boolean | null;
    anti_rug?: boolean | null;
    skip_duplicate?: boolean | null;
}
