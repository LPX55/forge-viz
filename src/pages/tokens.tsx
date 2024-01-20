import { Page, Tabs } from '@geist-ui/core';
import Pools from '../components/pools/pools.component';
import Tokens from '../components/tokens/tokens.component';
import Transactions from '../components/transactions/transactions.component';

const TokensPage = () => {
  return (
    <Page style={{ maxWidth: '1200px', margin: 'auto', padding: '1rem' }}>
      <Page.Content style={{ padding: '0' }}>
      <Tokens _pageSize={10} _totalPageCount={2} />

      </Page.Content>
    </Page>
  );
};

export default TokensPage;
