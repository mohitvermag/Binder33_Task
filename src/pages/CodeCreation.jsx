import { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { Code } from 'lucide-react';

export default function CodeCreation() {
  const [ipoName, setIpoName] = useState('');
  const [ipoCode, setIpoCode] = useState('');
  const [status, setStatus] = useState('Open');

  const [records, setRecords] = useState([
    {
      id: 1,
      ipoName: 'TechNova Ltd',
      ipoCode: 'TNL001',
      status: 'Open',
      createdAt: '09 Jun 2026',
    },
  ]);

  const handleCreate = (e) => {
    e.preventDefault();

    if (!ipoName.trim() || !ipoCode.trim()) return;

    const newRecord = {
      id: Date.now(),
      ipoName: ipoName.trim(),
      ipoCode: ipoCode.trim().toUpperCase(),
      status,
      createdAt: new Date().toLocaleDateString('en-GB'),
    };

    setRecords([newRecord, ...records]);

    setIpoName('');
    setIpoCode('');
    setStatus('Open');
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Closed':
        return 'bg-red-50 text-red-700 border-red-100';
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card
          title="Create IPO Code"
          subtitle="Add a new IPO reference code"
        >
          <form onSubmit={handleCreate} className="space-y-4">
            <Input
              label="IPO Name"
              id="ipo-name"
              placeholder="Enter IPO Name"
              value={ipoName}
              onChange={(e) => setIpoName(e.target.value)}
              required
            />

            <Input
              label="IPO Code"
              id="ipo-code"
              placeholder="e.g. TNL001"
              value={ipoCode}
              onChange={(e) => setIpoCode(e.target.value)}
              required
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-text-primary">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-brand-orange"
              >
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full justify-center flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              Create IPO Code
            </Button>
          </form>
        </Card>
      </div>

      {/* Table Section */}
      <div className="lg:col-span-2">
        <Card
          title="IPO Codes"
          subtitle={`${records.length} Records`}
        >
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-light bg-gray-50">
                  <th className="px-4 py-3 text-left">IPO Name</th>
                  <th className="px-4 py-3 text-left">IPO Code</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Created Date</th>
                </tr>
              </thead>

              <tbody>
                {records.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border-light hover:bg-gray-50"
                  >
                    <td className="px-4 py-4 font-medium">
                      {item.ipoName}
                    </td>

                    <td className="px-4 py-4 font-mono text-brand-orange font-semibold">
                      {item.ipoCode}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full border ${getStatusBadgeStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {item.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {records.map((item) => (
              <div
                key={item.id}
                className="border border-border-light rounded-lg p-4 bg-white"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">
                      {item.ipoName}
                    </h4>

                    <p className="text-sm text-brand-orange font-mono mt-1">
                      {item.ipoCode}
                    </p>
                  </div>

                  <span
                    className={`px-2 py-1 text-xs rounded-full border ${getStatusBadgeStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-3 text-sm text-text-secondary">
                  Created: {item.createdAt}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}