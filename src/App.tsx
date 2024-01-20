import { Page, Tabs } from '@geist-ui/core';
import Pools from './components/pools/pools.component';
import Tokens from './components/tokens/tokens.component';
import Transactions from './components/transactions/transactions.component';
import { Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <>    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FullPage />} />
        <Route path="pools" element={<PoolsPage />} />
        <Route path="tokens" element={<TokensPage />} />
      </Route>
    </Routes>
     
    </>

  );
};
function FullPage() {
  return (
    <Page style={{ maxWidth: '1200px', margin: 'auto', padding: '1rem' }}>
    <Page.Content style={{ padding: '0' }}>
      <Tabs initialValue='1'>
        <Tabs.Item label='Overview' value='1'>
          <Pools _pageSize={10} _totalPageCount={2} />
          <Tokens _pageSize={10} _totalPageCount={2} />
          <Transactions _pageSize={5} _totalPageCount={12} />
        </Tabs.Item>
        <Tabs.Item label='Pools' value='2'>
          <Pools _pageSize={10} _totalPageCount={2} />
        </Tabs.Item>
        <Tabs.Item label='Tokens' value='3'>
          <Tokens _pageSize={10} _totalPageCount={2} />
        </Tabs.Item>
        <Tabs.Item label='Transactions' value='4'>
          <Transactions _pageSize={10} _totalPageCount={6} />
        </Tabs.Item>
      </Tabs>
    </Page.Content>
  </Page>
  );
}

function TokensPage() {
  return (
    <Page style={{ maxWidth: '900px', margin: 'auto', padding: '1rem' }}>
      <Page.Content style={{ padding: '0' }}>
        <Tokens _pageSize={10} _totalPageCount={2} />

      </Page.Content>
    </Page>
  );
}

function PoolsPage() {
  return (
    <Page style={{ maxWidth: '1200px', margin: 'auto', padding: '1rem' }}>
      <Page.Content style={{ padding: '0' }}>
      <Pools _pageSize={10} _totalPageCount={2} />

      </Page.Content>
    </Page>
  );
}
