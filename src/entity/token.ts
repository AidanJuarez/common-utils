import type BigNumber from 'bignumber.js';

export class Token {
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
  declare create_at: number;
  declare update_at: number;
}
