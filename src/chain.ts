export class Chain {
    static readonly Unknown = new Chain('Unknown', '', 0, '', '', '', '', '');
    static readonly Ethereum = new Chain('Ethereum', 'ETH', 1, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 'etherscan.io', 'ethereum', 'ethereum', 'ethereum');
    static readonly Base = new Chain('Base', 'ETH', 8453, '0x4200000000000000000000000000000000000006', 'basescan.org', 'base', 'base', 'base');

    name: string;
    symbol: string;
    chain_id: number;
    scan_domain: string;
    gecko_ternimal_name: string;
    dexscreener_name: string;
    chainbase_name: string;
    wrapped_token_address: string;

    constructor(
        name: string,
        symbol: string,
        chain_id: number,
        wrapped_token_address: string,
        scan_domain: string,
        gecko_ternimal_name: string,
        dexscreener_name: string,
        chainbase_name: string
    ) {
        this.name = name;
        this.symbol = symbol;
        this.chain_id = chain_id;
        this.scan_domain = scan_domain;
        this.gecko_ternimal_name = gecko_ternimal_name;
        this.dexscreener_name = dexscreener_name;
        this.chainbase_name = chainbase_name;
        this.wrapped_token_address = wrapped_token_address;
    }

    public buildExployerUrl(path: string, params: string) {
        return `https://${this.scan_domain}${path}/${params}`;
    }

    public buildDexscreenerUrl(token_address: string) {
        return `https://dexscreener.com/${this.dexscreener_name}/${token_address}`;
    }

    static fromString(name: string) {
        switch (name.toLowerCase()) {
            case 'ethereum':
            case 'eth':
                return Chain.Ethereum;
            case 'base':
                return Chain.Base;
            default:
                return Chain.Unknown;
        }
    }
}
