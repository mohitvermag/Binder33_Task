import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import { LogOut } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Mohit';

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'Overview';
      case '/dashboard/tasks':
        return 'Task Management';
      case '/dashboard/codes':
        return 'Code Creation';
      case '/dashboard/ipo':
        return 'IPO Management';
      case '/dashboard/purchase':
        return 'Billing & Purchase';
      case '/dashboard/ims':
        return 'Inventory Management (IMS)';
      default:
        return 'Dashboard';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/auth');
  };

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />

      <div className="flex-grow flex flex-col min-w-0 min-h-screen pb-16 md:pb-0">
        <header className="h-16 border-b border-border-light bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-40">
          <div>
            <h1 className="text-lg font-bold text-text-primary">
              {getPageTitle(location.pathname)}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200">
                <span className="text-xs font-bold text-brand-orange uppercase">
                  {userName.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-text-primary hidden sm:inline-block">
                {userName}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 text-text-secondary hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
