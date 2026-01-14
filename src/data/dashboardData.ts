import {
  StatsItem,
  EarningsData,
  UsersToday,
  EarningsChartData,
} from '../types';

export const statsData: StatsItem[] = [
  {
    title: "Revenue",
    value: "$34k",
    bg: "bg-purple-600",
  },
  {
    title: "Orders",
    value: "811",
    bg: "bg-purple-600",
  },
  {
    title: "Profit",
    value: "$2.3k",
    bg: "bg-purple-600",
  },
  {
    title: "Users",
    value: "762",
    bg: "bg-purple-600",
  },
];

export const earningsData: EarningsData = {
  target: "$53k",
  revenue: "$34,533",
  profit: "$2,345",
  orders: "811",
};

export const usersToday: UsersToday = {
  total: "234",
};

export const earningsChartData: EarningsChartData[] = [
  { name: "Jan", earnings: 4000 },
  { name: "Feb", earnings: 3000 },
  { name: "Mar", earnings: 5000 },
  { name: "Apr", earnings: 4500 },
  { name: "May", earnings: 6000 },
  { name: "Jun", earnings: 5500 },
];

