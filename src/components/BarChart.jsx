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


const CustomBarChart = ({data, barsize, ticks, selectedPeriod, width, radius}) => {

  return (

    <BarChart width={width} height={250} data={data}  barCategoryGap='10%' barSize={barsize} margin={0}>
    <CartesianGrid strokeDasharray="3 3" stroke='#bbbaba'  />
    <XAxis dataKey={selectedPeriod} fontSize={10} interval={0} strokeWidth={0} margin={0} color='#888888' fontWeight={400}/>
    <YAxis fontSize={10} strokeWidth={0} margin={0} ticks={ticks}  color='#888888' fontWeight={400}/>
    <Tooltip />
    <Bar shape={<RoundedBar radius={radius} />} dataKey="value" fill='#34CAA5'/>
  </BarChart>
  )
}

export default CustomBarChart