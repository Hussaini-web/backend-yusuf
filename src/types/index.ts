export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
  avatar: string;
}

export interface Order {
  id: string;
  user: string;
  avatar: string;
  project: string;
  address: string;
  date: string;
  status: string;
}

export interface StatsItem {
  title: string;
  value: string;
  bg: string;
}

export interface EarningsData {
  target: string;
  revenue: string;
  profit: string;
  orders: string;
}

export interface UsersToday {
  total: string;
}

export interface EarningsChartData {
  name: string;
  earnings: number;
}

export interface DashboardStatsResponse {
  stats: StatsItem[];
  earnings: EarningsData;
  usersToday: UsersToday;
  earningsChart: EarningsChartData[];
}

