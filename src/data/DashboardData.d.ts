interface SessionsPerDayDataPoint {
  day: string;
  sessions: number;
}

interface ViewsPerBrowserDataPoint {
  browser: string;
  views: number;
}

export interface DashboardData {
  totalSessions: {
    value: number;
    percentChange: number;
  };
  totalVisitors: {
    value: number;
    percentChange: number;
  };
  timeSpent: {
    value: number;
    percentChange: number;
  };
  avgRequestsReceived: {
    value: number;
    percentChange: number;
  };
  sessionsPerDayData: SessionsPerDayDataPoint[];
  windowsSessions: number;
  stackOverflowSessions: number;
  chromeSessions: number;
  outlookSessions: number;
  viewsPerBrowserData: ViewsPerBrowserDataPoint[];
  onlineVisitors: {
    current: number;
    max: number;
  };
  newVisitors: {
    current: number;
    max: number;
  };
  averageRevenue: {
    value: string;
    percentChange: number;
  };
}
