import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { Activity, Code, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [userName] = useState(
    () => localStorage.getItem('userName') || 'Mohit'
  );

  return (
    <div className="space-y-6">
      <div className="bg-white border border-orange-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-brand-orange">
            Welcome back, {userName}
          </h2>
          <p className="text-text-secondary mt-2">
            Manage IPO listings and generate access codes from one place.
          </p>
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
        <Card className="hover:border-orange-200 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Platform Status
              </p>

              <h3 className="text-2xl font-bold text-text-primary mt-1.5">
                Ready
              </h3>

              <p className="text-xs text-text-secondary mt-2">
                IPO and code management system is active.
              </p>
            </div>

            <div className="p-3 bg-orange-50 text-brand-orange rounded-lg">
              <Activity className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="hover:border-orange-200 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Code Creation
              </p>

              <h3 className="text-2xl font-bold text-text-primary mt-1.5">
                Secure
              </h3>

              <p className="text-xs text-text-secondary mt-2">
                Generate unique and reusable access codes.
              </p>
            </div>

            <div className="p-3 bg-orange-50 text-brand-orange rounded-lg">
              <Code className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="hover:border-orange-200 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                IPO Tracking
              </p>

              <h3 className="text-2xl font-bold text-text-primary mt-1.5">
                Enabled
              </h3>

              <p className="text-xs text-text-secondary mt-2">
                Manage IPO listings efficiently from a single dashboard.
              </p>
            </div>

            <div className="p-3 bg-orange-50 text-brand-orange rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}