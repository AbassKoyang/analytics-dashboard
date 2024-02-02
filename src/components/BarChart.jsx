import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


// Custom shape function for rounded top-left and top-right edges
const RoundedBar = ({ x, y, width, height }) => {
    const radius = 50;
    return (
                <path d={`M${x},${y + height} 
                L${x},${y + radius} 
                Q${x},${y} ${x + radius},${y} 
                L${x + width - radius},${y} 
                Q${x + width},${y} ${x + width},${y + radius} 
                L${x + width},${y + height} 
                Z`} 
        fill="rgb(64, 169, 255)"
        />
    );
    };

const CustomBarChart = ({data}) => {
  return (
    <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar shape={<RoundedBar />} dataKey="value" fill="#8884d8" />
  </BarChart>
  )
}

export default CustomBarChart