import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Code, 
  TrendingUp, 
  ShoppingBag, 
  Package 
} from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { name: 'Home', path: '/dashboard', icon: LayoutDashboard, end: true },
    { name: 'Tasks', path: '/dashboard/tasks', icon: CheckSquare },
    { name: 'Codes', path: '/dashboard/codes', icon: Code },
    { name: 'IPO', path: '/dashboard/ipo', icon: TrendingUp },
    { name: 'Buy', path: '/dashboard/purchase', icon: ShoppingBag },
    { name: 'IMS', path: '/dashboard/ims', icon: Package }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-light h-16 md:hidden flex z-50 shadow-lg">
      <div className="grid grid-cols-6 w-full h-full">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
                  isActive ? 'bg-brand-orange text-white' : 'text-text-secondary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <IconComponent className="w-5 h-5 transition-colors" />
                  <span className="truncate max-w-full px-1">{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
