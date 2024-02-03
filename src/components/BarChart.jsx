import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const RoundedBar = ({ x, y, width, height }) => {
    const radius = 20;
    return (
                <path d={`M${x},${y + height} 
                L${x},${y + radius} 
                Q${x},${y} ${x + radius},${y} 
                L${x + width - radius},${y} 
                Q${x + width},${y} ${x + width},${y + radius} 
                L${x + width},${y + height} 
                Z`} 
                fill='#34CAA5' opacity='0.6'
        />
    );
    };


const CustomBarChart = ({data, barsize, ticks, selectedPeriod, width}) => {

  return (

        <BarChart width={width} height={270} data={data}  barCategoryGap='10%' barSize={barsize} margin={0}>
    <CartesianGrid strokeDasharray="3 3" stroke='#EAEAEA'  />
    <XAxis dataKey={selectedPeriod} fontSize={10} interval={0} strokeWidth={0} margin={0} color='#525252' fontWeight={400}/>
    <YAxis fontSize={10} strokeWidth={0} margin={0} ticks={ticks}  color='#525252' fontWeight={400}/>
    <Tooltip />
    <Bar shape={<RoundedBar />} dataKey="value" fill='#34CAA5'/>
  </BarChart>
  )
}

export default CustomBarChart