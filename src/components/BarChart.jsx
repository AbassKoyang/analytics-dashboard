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
                fill='#34CAA5' opacity='0.4'
        />
    );
    };


const CustomBarChart = ({data}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={700} height={300} data={data}  barCategoryGap='10%' barSize={30} margin={0}>
    <CartesianGrid strokeDasharray="3 3" stroke='#EAEAEA'  />
    <XAxis dataKey="month" fontSize={10} interval={0} strokeWidth={0} margin={0} color='#525252' fontWeight={400}/>
    <YAxis fontSize={10} strokeWidth={0} margin={0} ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000]} color='#525252' fontWeight={400}/>
    <Tooltip />
    <Bar shape={<RoundedBar />} dataKey="value" fill='#34CAA5'/>
  </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomBarChart