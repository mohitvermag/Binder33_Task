export const categories = ['Coupon', 'Access Token', 'Referral Link', 'Serial Key'];

export const initialIpos = [
  {
    id: 1,
    name: 'Acme Software Corp',
    ticker: 'ACME',
    status: 'Open',
    openDate: '2026-06-01',
    closeDate: '2026-06-15',
    shares: '5,000,000',
    price: '$14.50'
  },
  {
    id: 2,
    name: 'BetaTech Innovations',
    ticker: 'BETA',
    status: 'Pending',
    openDate: '2026-06-20',
    closeDate: '2026-07-05',
    shares: '2,500,000',
    price: '$22.00'
  },
  {
    id: 3,
    name: 'Delta Logistics Systems',
    ticker: 'DLTA',
    status: 'Closed',
    openDate: '2026-05-10',
    closeDate: '2026-05-25',
    shares: '8,000,000',
    price: '$9.75'
  },
  {
    id: 4,
    name: 'OmniRetail Group Ltd',
    ticker: 'OMNI',
    status: 'Open',
    openDate: '2026-06-05',
    closeDate: '2026-06-22',
    shares: '12,000,000',
    price: '$18.25'
  },
  {
    id: 5,
    name: 'StarEnergy Systems',
    ticker: 'STAR',
    status: 'Closed',
    openDate: '2026-04-15',
    closeDate: '2026-05-01',
    shares: '3,800,000',
    price: '$31.00'
  },
  {
    id: 6,
    name: 'Nova Healthtech',
    ticker: 'NOVA',
    status: 'Pending',
    openDate: '2026-07-01',
    closeDate: '2026-07-15',
    shares: '1,200,000',
    price: '$12.00'
  }
];

export const initialActivities = [
  {
    id: 1,
    action: 'Generated 15 Access Token codes for "Summer Launch"',
    time: '12 minutes ago',
    user: 'Mohit',
    type: 'code'
  },
  {
    id: 2,
    action: 'Updated status of Delta Logistics IPO to Closed',
    time: '2 hours ago',
    user: 'System',
    type: 'ipo'
  },
  {
    id: 3,
    action: 'Completed task: "Review IPO pricing schedules"',
    time: '4 hours ago',
    user: 'Mohit',
    type: 'task'
  },
  {
    id: 4,
    action: 'New registration approved for API partner key',
    time: 'Yesterday',
    user: 'Admin',
    type: 'user'
  },
  {
    id: 5,
    action: 'Purchase order #PO-4921 confirmed for local servers',
    time: 'Yesterday',
    user: 'Accounts',
    type: 'purchase'
  }
];

export const initialTasks = [
  {
    id: 1,
    title: 'Review IPO pricing schedules for BetaTech',
    completed: true,
    priority: 'High',
    dueDate: '2026-06-10'
  },
  {
    id: 2,
    title: 'Generate serial codes for enterprise customer pack',
    completed: false,
    priority: 'High',
    dueDate: '2026-06-12'
  },
  {
    id: 3,
    title: 'Update IMS records for Q2 hardware arrivals',
    completed: false,
    priority: 'Medium',
    dueDate: '2026-06-15'
  },
  {
    id: 4,
    title: 'Audit user security logs for login deviations',
    completed: false,
    priority: 'Low',
    dueDate: '2026-06-20'
  }
];

export const initialCodes = [
  {
    code: 'BND-001',
    name: 'Standard Promo',
    category: 'Coupon',
    prefix: 'BND',
    createdAt: '2026-06-08 14:22'
  },
  {
    code: 'BND-002',
    name: 'Standard Promo',
    category: 'Coupon',
    prefix: 'BND',
    createdAt: '2026-06-08 14:22'
  },
  {
    code: 'BND-003',
    name: 'Standard Promo',
    category: 'Coupon',
    prefix: 'BND',
    createdAt: '2026-06-08 14:22'
  }
];
