'use client'
import { PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#14b8a6', '#e5e7eb'] // blue for skill, gray for rest

interface SkillChartProps {
  skill: string
  percent: number // 0-100
}

const SkillChart: React.FC<SkillChartProps> = ({ skill, percent }) => {
  const data = [
    { name: skill, value: percent },
    { name: 'Remaining', value: 100 - percent },
  ]

  return (
    <div className="flex flex-col items-center w-32">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={35}
          outerRadius={50}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="text-center text-lg mt-2">{skill}</div>
      <div className="text-md text-white">{percent}%</div>
    </div>
  )
}

export default SkillChart
