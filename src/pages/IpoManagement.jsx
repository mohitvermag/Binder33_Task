import Card from '../components/Card';
import { initialIpos } from '../data/mockData';

export default function IpoManagement() {
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
    <div>
      <Card
        title="IPO Management"
        subtitle={`${initialIpos.length} IPO Listings`}
      >
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Company</th>
                <th className="text-left py-3">Ticker</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Shares</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Open Date</th>
                <th className="text-left py-3">Close Date</th>
              </tr>
            </thead>

            <tbody>
              {initialIpos.map((ipo) => (
                <tr key={ipo.id} className="border-b">
                  <td className="py-4 font-semibold">{ipo.name}</td>
                  <td>{ipo.ticker}</td>

                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs border ${getStatusBadgeStyle(
                        ipo.status
                      )}`}
                    >
                      {ipo.status}
                    </span>
                  </td>

                  <td>{ipo.shares}</td>
                  <td>{ipo.price}</td>
                  <td>{ipo.openDate}</td>
                  <td>{ipo.closeDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {initialIpos.map((ipo) => (
            <div
              key={ipo.id}
              className="border rounded-lg p-4 bg-white"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{ipo.name}</h3>
                  <p className="text-sm text-gray-500">{ipo.ticker}</p>
                </div>

                <span
                  className={`px-2 py-1 text-xs rounded-full border ${getStatusBadgeStyle(
                    ipo.status
                  )}`}
                >
                  {ipo.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <div>
                  <p className="text-gray-500">Price</p>
                  <p>{ipo.price}</p>
                </div>

                <div>
                  <p className="text-gray-500">Shares</p>
                  <p>{ipo.shares}</p>
                </div>

                <div>
                  <p className="text-gray-500">Open Date</p>
                  <p>{ipo.openDate}</p>
                </div>

                <div>
                  <p className="text-gray-500">Close Date</p>
                  <p>{ipo.closeDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}