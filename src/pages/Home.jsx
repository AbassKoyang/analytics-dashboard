import StatsCard from "../components/StatsCard"
import Graph from '../assets/totalrefundgraph.png'
import { RefundIcon, TrendDownIcon } from "../assets/icons"
import ChartCard from "../components/ChartCard"

const Home = () => {
  return (
    <section className="w-full grid grid-cols-5 bg-purple-600">
      <ChartCard />
      <div className="w-full grid grid-cols-2 col-span-5 lg:col-span-2 self-start">
      <StatsCard graph={Graph} icon={<RefundIcon />} heading='Total refund' value='270' percentage='23.5%' trendIcon={<TrendDownIcon />} text='vs. previous month' textColor='text-[#ED544E]' backGroundColor='bg-[#ed534e31]'  />
      <StatsCard graph={Graph} icon={<RefundIcon />} heading='Total refund' value='270' percentage='23.5%' trendIcon={<TrendDownIcon />} text='vs. previous month' textColor='text-[#ED544E]' backGroundColor='bg-[#ed534e31]'  />
      <StatsCard graph={Graph} icon={<RefundIcon />} heading='Total refund' value='270' percentage='23.5%' trendIcon={<TrendDownIcon />} text='vs. previous month' textColor='text-[#ED544E]' backGroundColor='bg-[#ed534e31]'  />
      <StatsCard graph={Graph} icon={<RefundIcon />} heading='Total refund' value='270' percentage='23.5%' trendIcon={<TrendDownIcon />} text='vs. previous month' textColor='text-[#ED544E]' backGroundColor='bg-[#ed534e31]'  />
      </div>
    </section>
  )
}

export default Home