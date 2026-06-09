import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}