import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Auth from './pages/Auth';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import CodeCreation from './pages/CodeCreation';
import IpoManagement from './pages/IpoManagement';
import Purchase from './pages/Purchase';
import Ims from './pages/Ims';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="codes" element={<CodeCreation />} />
          <Route path="ipo" element={<IpoManagement />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="ims" element={<Ims />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
