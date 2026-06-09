import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Code, 
  TrendingUp, 
  ShoppingBag, 
  Package, 
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/dashboard', icon: LayoutDashboard, end: true },
    { name: 'Tasks', path: '/dashboard/tasks', icon: CheckSquare },
    { name: 'Code Creation', path: '/dashboard/codes', icon: Code },
    { name: 'IPO Management', path: '/dashboard/ipo', icon: TrendingUp },
    { name: 'Purchase', path: '/dashboard/purchase', icon: ShoppingBag },
    { name: 'IMS', path: '/dashboard/ims', icon: Package }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/auth');
  };

  return (
    <aside className="w-64 bg-white border-r border-border-light flex flex-col h-screen sticky top-0 hidden md:flex">
      <div className="h-16 px-6 border-b border-border-light flex items-center gap-2">
        <span className="text-xl font-extrabold text-brand-orange tracking-wider">
          BINDER-OS
        </span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-brand-orange text-white'
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <IconComponent 
                    className={`w-4.5 h-4.5 transition-colors ${
                      isActive ? 'text-white' : 'text-text-secondary group-hover:text-text-primary'
                    }`} 
                  />
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border-light">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4.5 h-4.5 text-red-600" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
