
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Charts = () => {

  // Sample data
  const data = [
    { name: 'Total Complains', value: 500 },
    { name: 'Resolved', value: 100 },
    { name: 'Progress', value: 40 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="chart-style">
      <h1 className="chart-heading"> Projects </h1>
      <div className='chart'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            animationBegin={3000}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Charts;