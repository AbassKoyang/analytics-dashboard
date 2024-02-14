import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const RoundedBar = ({ x, y, width, height, radius }) => {
    return (
                <path d={`M${x},${y + height} 
                L${x},${y + radius} 
                Q${x},${y} ${x + radius},${y} 
                L${x + width - radius},${y} 
                Q${x + width},${y} ${x + width},${y + radius} 
                L${x + width},${y + height} 
                Z`} 
                fill='#34CAA5' opacity='0.9'
        />
    );
  };


const CustomBarChart = ({data, ticks, selectedPeriod}) => {
  const [barSize, setBarSize] = useState(30);
  const [chartWidth, setChartWidth] = useState(300);
  const [barRadius, setBarRadius] = useState(25)


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth; 
      if (width <= 500 && width > 400) {
        setBarSize(25);
        setChartWidth(400);
        setBarRadius(15);
      } else if(width < 400) {
        setBarSize(25);
        setChartWidth(350);
        setBarRadius(15);
      } else if (width > 1600) {
        setBarSize(40);
        setChartWidth(900);
        setBarRadius(20);
      } else {
        setBarSize(35);
        setChartWidth(800);
        setBarRadius(23);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (

    <BarChart width={chartWidth} height={250} data={data}  barCategoryGap='10%' barSize={barSize} margin={0}>
    <CartesianGrid strokeDasharray="3 3" stroke='#bbbaba'  />
    <XAxis dataKey={selectedPeriod} fontSize={10} interval={0} strokeWidth={0} margin={0} color='#888888' fontWeight={400}/>
    <YAxis fontSize={10} strokeWidth={0} margin={0} ticks={ticks}  color='#888888' fontWeight={400}/>
    <Tooltip />
    <Bar shape={<RoundedBar radius={barRadius} />} dataKey="value" fill='#34CAA5'/>
  </BarChart>
  )
}

export default CustomBarChart