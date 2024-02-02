import CustomBarChart from "./BarChart"

// Example data
const data = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 200 },
    { name: 'D', value: 500 },
  ];
const ChartCard = () => {
  return (
    <div className="bg-blue-500 col-span-5 lg:col-span-3">
        <CustomBarChart data={data} />
    </div>
  )
}

export default ChartCard