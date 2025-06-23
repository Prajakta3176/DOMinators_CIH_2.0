import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const issueStats = [
  { month: 'Jan', resolved: 250, pending: 100 },
  { month: 'Feb', resolved: 150, pending: 80 },
  { month: 'Mar', resolved: 270, pending: 60 },
  { month: 'Apr', resolved: 300, pending: 70 },
  { month: 'May', resolved: 270, pending: 200 },
  { month: 'Jun', resolved: 200, pending: 320 },
];

const issueCategories = [
  { name: 'Roads', value: 45 },
  { name: 'Water', value: 25 },
  { name: 'Electricity', value: 20 },
  { name: 'Other', value: 10 },
];

const resolutionTimes = [
  { category: 'Roads', time: 10 },
  { category: 'Water', time: 7 },
  { category: 'Electricity', time: 9 },
  { category: 'Other', time: 6 },
];

const monthlyIssues = [
  { month: 'Jan', issues: 100 },
  { month: 'Feb', issues: 150 },
  { month: 'Mar', issues: 250 },
  { month: 'Apr', issues: 400 },
  { month: 'May', issues: 500 },
  { month: 'Jun', issues: 600 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function CivicDashboard() {
  return (
    <div className="p-6 bg-white min-h-screen mt-25">
      <h1 className="text-3xl font-bold mb-6">CIVIC ISSUE DASHBOARD</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Issues</h2>
          <p className="text-3xl font-bold">1,250</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Resolved</h2>
          <p className="text-xl">750</p>
          <span className="text-sm text-gray-600">In Progress</span>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-xl">300</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">In Progress</h2>
          <p className="text-xl">200</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-lg font-semibold mb-2">Issue Statistics</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={issueStats}>
              <XAxis dataKey="month" />
              <Tooltip />
              <Legend />
              <Bar dataKey="resolved" fill="#0088FE" name="Resolved" />
              <Bar dataKey="pending" fill="#FFBB28" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-lg font-semibold mb-2">Issues by Category</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={issueCategories}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {issueCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-lg font-semibold mb-2">Issues by Month</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyIssues}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line type="monotone" dataKey="issues" stroke="#0088FE" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-lg font-semibold mb-2">Resolution Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart layout="vertical" data={resolutionTimes}>
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" />
              <Tooltip />
              <Bar dataKey="time" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
