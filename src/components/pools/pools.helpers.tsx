/* eslint-disable array-callback-return */
import { Avatar, Spacer } from '@geist-ui/core';
import { CurrencyToAbbreviation } from 'currency-to-abbreviation';
import { PoolType, PoolsTableType } from './pools.types';

/**
 * Helper function to populate geist UI's table component.
 *
 * Returns an updated version of the POOLS data fetched from the subgraph
 * to update the POOLS table in the UI.
 *
 * Table array can include JSX elements.
 */
export const getPoolsTableData = (pools: PoolType[]) => {

  let poolsTableData: PoolsTableType = [];

  pools.map((pool: PoolType) => {

    let poolData = {
      pool: (
        <>
          <Avatar
            src={`https://r2.forge.trade/tokens/${pool.token0.id}.png`}
          />
          <Avatar
            src={`https://r2.forge.trade/tokens/${pool.token1.id}.png`}
            />
          <Spacer />
          {pool.token0.symbol === 'WETH' ? 'ETH' : pool.token0.symbol === 'WBTC' ? 'BTC' : pool.token0.symbol}/
          {pool.token1.symbol === 'WETH' ? 'ETH' : pool.token1.symbol === 'WBTC' ? 'BTC' : pool.token1.symbol}
        </>
      ),
      tvl: CurrencyToAbbreviation({ inputNumber: Number(pool.totalValueLockedUSD) })?.toString(),
      volume24: CurrencyToAbbreviation({ inputNumber: Number(pool.poolDayData[0].volumeUSD) })?.toString(),
      // link: (
      //   <a href={`https://info.uniswap.org/#/pools/${pool.id}`} target='_blank'>
      //     <ExternalLink size={20} />
      //   </a>
      // ),
    };

    poolsTableData.push(poolData);
  });

  return { pools: poolsTableData };
};
