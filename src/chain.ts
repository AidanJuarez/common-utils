export class Chain {
  static readonly Ethereum = new Chain(
    'Ethereum',
    'ETH',
    1,
    'etherscan.io',
    'ethereum',
    'eth',
    'ethereum'
  );
  static readonly Base = new Chain(
    'Base',
    'ETH',
    8453,
    'basescan.org',
    'base',
    'base',
    'base'
  );

  name: string;
  symbol: string;
  chain_id: number;
  scan_domain: string;
  gecko_ternimal_name: string;
  dexscreener_name: string;
  chainbase_name: string;

  constructor(
    name: string,
    symbol: string,
    chain_id: number,
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
  }

  static fromString(name: string) {
    switch (name.toLowerCase()) {
      case 'ethereum':
      case 'eth':
        return Chain.Ethereum;
      case 'base':
        return Chain.Base;
      default:
        throw new Error('Unknown chain name');
    }
  }
}
