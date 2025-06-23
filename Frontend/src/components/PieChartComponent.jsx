import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Resolved', value: 1034 },
  { name: 'Pending', value: 389 },
  { name: 'In Progress', value: 100 },
];

const COLORS = ['#4CAF50', '#FFC107', '#2196F3'];

const PieChartComponent = () => (
  <PieChart width={300} height={300}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default PieChartComponent;
