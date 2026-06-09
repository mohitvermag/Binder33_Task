import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { initialIpos, initialTasks, initialCodes, initialActivities } from '../data/mockData';
import { Activity, CheckSquare, Clock, Code, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [userName] = useState(() => localStorage.getItem('userName') || 'Mohit');

  const [taskCount] = useState(() => {
    const savedTasks = localStorage.getItem('binder_tasks');
    return savedTasks ? JSON.parse(savedTasks).length : initialTasks.length;
  });

  const [activeIpoCount] = useState(() => {
    const activeIpos = initialIpos.filter((ipo) => ipo.status === 'Open' || ipo.status === 'Pending');
    return activeIpos.length;
  });

  const [codeCount] = useState(() => {
    const savedCodes = localStorage.getItem('binder_codes');
    return savedCodes ? JSON.parse(savedCodes).length : initialCodes.length;
  });

  const [activities] = useState(initialActivities);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'code':
        return <Code className="w-4 h-4 text-orange-600" />;
      case 'ipo':
        return <TrendingUp className="w-4 h-4 text-orange-600" />;
      case 'task':
        return <CheckSquare className="w-4 h-4 text-orange-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-orange-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-brand-orange">
            Welcome back, {userName}
          </h2>
        </div>
        <div className="flex gap-2">
          <Link
            to="/dashboard/codes"
            className="text-xs font-semibold bg-brand-orange text-white hover:bg-brand-orange-hover px-4 py-2 rounded-lg transition-colors"
          >
            Generate Codes
          </Link>
          <Link
            to="/dashboard/ipo"
            className="text-xs font-semibold bg-white text-text-primary border border-border-light hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
          >
            Manage IPOs
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Link to="/dashboard/tasks" className="block transition-transform hover:-translate-y-0.5">
          <Card className="hover:border-orange-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Total Tasks
                </p>
                <h3 className="text-2xl font-bold text-text-primary mt-1.5">{taskCount}</h3>
                <p className="text-xs text-text-secondary mt-2">
                  <span className="text-brand-orange font-medium">Manage checklist</span> in Tasks view
                </p>
              </div>
              <div className="p-3 bg-orange-50 text-brand-orange rounded-lg">
                <CheckSquare className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </Link>

        <Link to="/dashboard/ipo" className="block transition-transform hover:-translate-y-0.5">
          <Card className="hover:border-orange-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Active IPOs
                </p>
                <h3 className="text-2xl font-bold text-text-primary mt-1.5">{activeIpoCount}</h3>
                <p className="text-xs text-text-secondary mt-2">
                  <span className="text-brand-orange font-medium">{activeIpoCount} listings</span> open or pending
                </p>
              </div>
              <div className="p-3 bg-orange-50 text-brand-orange rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </Link>

        <Link to="/dashboard/codes" className="block transition-transform hover:-translate-y-0.5">
          <Card className="hover:border-orange-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Generated Codes
                </p>
                <h3 className="text-2xl font-bold text-text-primary mt-1.5">{codeCount}</h3>
                <p className="text-xs text-text-secondary mt-2">
                  <span className="text-brand-orange font-medium">Create and copy</span> codes quickly
                </p>
              </div>
              <div className="p-3 bg-orange-50 text-brand-orange rounded-lg">
                <Code className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
