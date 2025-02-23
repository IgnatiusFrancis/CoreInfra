// src/components/dashboard/Dashboard.jsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Bell, User, Search } from "lucide-react";

const QuickAccessCard = ({ icon, title }) => (
  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:bg-gray-50 cursor-pointer">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
    </div>
    <div className="text-blue-600">→</div>
  </div>
);

const StatCard = ({
  icon,
  title,
  value,
  change,
  period,
  textColor = "text-gray-900",
}) => (
  <div className="bg-white p-6 rounded-lg border">
    <div className="flex items-center text-gray-400 mb-2">{icon}</div>
    <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-semibold ${textColor}`}>{value}</span>
      <div className="flex items-center gap-1">
        <span className="text-sm text-green-500">{change}</span>
        <span className="text-xs text-gray-400">{period}</span>
      </div>
    </div>
  </div>
);

const RecentRequests = ({ recentRequests }) => {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800">Recent Card Requests</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="text-left py-2 font-normal">Branch</th>
              <th className="text-left py-2 font-normal">Card Type</th>
              <th className="text-left py-2 font-normal">Quantity</th>
              <th className="text-left py-2 font-normal"></th>
              <th className="text-right py-2 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentRequests.map((request, index) => (
              <tr key={index} className="text-sm border-t text-gray-500">
                <td className="py-3">{request.branchName}</td>
                <td>{request.cardType}</td>
                <td>{request.quantity}</td>
                <td>
                  {request.status === "B" ? (
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${request.statusColor}`}
                    >
                      B
                    </div>
                  ) : (
                    <span className={request.statusColor}>
                      {request.status}
                    </span>
                  )}
                </td>
                <td className="text-right">
                  <button className="text-blue-600 hover:text-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [recentRequests, setRecentRequests] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "https://coreinfra.onrender.com/api/v1/card-requests?limit=5"
        );
        setRecentRequests(response.data.requests);
        setPendingCount(response.data.pendingCount);
      } catch (error) {
        console.error("Error fetching recent requests", error);
      }
    };

    fetchRequests();
  }, []);

  const monthlyIssuanceData = [
    { name: "May", personalized: 45, instant: 10 },
    { name: "Jun", personalized: 65, instant: 25 },
    { name: "Jul", personalized: 30, instant: 8 },
    { name: "Aug", personalized: 48, instant: 12 },
    { name: "Sep", personalized: 40, instant: 10 },
    { name: "Oct", personalized: 75, instant: 28 },
    { name: "Nov", personalized: 60, instant: 15 },
  ];

  const weeklyIncomeData = Array(7)
    .fill()
    .map((_, i) => ({
      name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      value: Math.floor(Math.random() * 60) + 20,
    }));

  const cardStatusData = [
    { name: "Active", value: 1850, color: "#0ea5e9" },
    { name: "Expired", value: 350, color: "#f59e0b" },
    { name: "Inactive", value: 150, color: "#6b7280" },
    { name: "Blocked", value: 75, color: "#4f46e5" },
    { name: "Lost", value: 25, color: "#ef4444" },
  ];

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-xl font-medium mb-1 text-gray-800">
            Hi Nazeer, what would you like to do today?
          </h1>
          <p className="text-sm text-gray-800">
            Last login: 26/11/2024 14:30:58
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Today</span>
            <span className="text-gray-500">11 Nov 2024</span>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="mb-8">
        <h2 className="text-sm font-medium mb-4 text-gray-800">
          Your Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickAccessCard
            icon={
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 7h10M7 12h10M7 17h10" />
              </svg>
            }
            title="Manage a Card"
          />
          <QuickAccessCard
            icon={
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            }
            title="Issue Instant Card"
          />
          <QuickAccessCard
            icon={
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 8v13H3V8M1 3h22v5H1z" />
              </svg>
            }
            title="Issue Personalized Card"
          />
          <QuickAccessCard
            icon={
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 3h6v11h4l-7 7-7-7h4z" />
              </svg>
            }
            title="Review Card Requests"
          />
        </div>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 7h10M7 12h10M7 17h10" />
            </svg>
          }
          title="Total Active Cards"
          value="26,478"
          change="+19%"
          period="this month"
        />
        <StatCard
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 8v13H3V8M1 3h22v5H1z" />
            </svg>
          }
          title="Total Personalized Cards"
          value="15,703"
          change="+8.5%"
          period="this month"
        />
        <StatCard
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          }
          title="Today's Revenue"
          value="₦9.3M"
          change="+16%"
          period="vs yesterday"
          textColor="text-green-600"
        />
        <StatCard
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          }
          title="Pending Requests"
          value={pendingCount}
          change="Requires attention"
          period=""
          textColor="text-orange-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-6 text-gray-800">Monthly Issuance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyIssuanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="personalized"
                fill="#e0e7ff"
                radius={[4, 4, 0, 0]}
              />
              <Bar dataKey="instant" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-600">Personalized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-100"></div>
              <span className="text-sm text-gray-600">Instant</span>
            </div>
          </div>
        </div>
        <RecentRequests recentRequests={recentRequests} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <RecentRequests recentRequests={recentRequests}/> */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-6 text-gray-800">This Week's Income</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyIncomeData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-6 text-gray-800">
            Card Status Distribution
          </h3>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={cardStatusData}
                  innerRadius={80}
                  outerRadius={100}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {cardStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {cardStatusData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
