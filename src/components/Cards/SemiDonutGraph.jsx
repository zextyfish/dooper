import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const SemiDonutGraph = ({ percentage, color, text, direction}) => {
  const data = [
    { name: 'Filled', value: percentage },
    { name: 'Empty', value: 100 - percentage },
  ];

  return (
    <div className='relative flex flex-col items-center'>
      <ResponsiveContainer width="100%" height={200} className="">
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="70%"
              outerRadius="80%"
              fill="#DBDADE"
            >
              <Cell fill={color} />
            </Pie>
          </PieChart>
      </ResponsiveContainer>
        <div className='flex justify-center space-x-1 absolute bottom-[100px] w-full items-center'>
          <p className=' text-[#4B465C] font-medium text-[14px] lg:text-[20px] text-center'>{percentage}%</p>
          {
            direction === "up" ? <img src="/Assets/UpwardArrow.png" alt="arrow" className='w-[16px] lg:w-[20px]' /> : <img src="/Assets/DownwardArrow.png" alt="arrow" className='w-[15px]' />
          }
        </div>
        <p className='absolute bottom-[60px] lg:bottom-[45px] text-[10px] lg:text-[16px] text-[#4B465C90] text-center w-[85%] lg:w-[80%]'>{text}</p>
    </div>
  );
};

export default SemiDonutGraph;
