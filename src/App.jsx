import { Route, Routes } from 'react-router-dom';
import Wallet from './pages/Wallet/Wallet';
import Bridge from './pages/Bridge/Bridge';
import MasterPage from './MasterPage';
import SwapToken from './pages/SwapToken';
import GasToken from './pages/GasToken';
import Transactions from './pages/Transactions';
import FAQs from './pages/FAQ';
import DeveloperTools from './pages/DeveloperTools';
import Support from './pages/Support';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MasterPage />}>
        <Route index element={<Wallet />} />
        <Route path='/bridge' element={<Bridge />} />
        <Route path='/transaction' element={<Transactions />} />
        <Route path='/gasToken' element={<GasToken />} />
        <Route path='/swapToken' element={<SwapToken />} />
        <Route path='/faq' element={<FAQs />} />
        <Route path='/developerTools' element={<DeveloperTools />} />
        <Route path='/support' element={<Support />} />
      </Route>
    </Routes>
  );
};

export default App;
