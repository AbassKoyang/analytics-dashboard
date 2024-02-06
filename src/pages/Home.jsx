import StatsCard from "../components/StatsCard"
import Graph from '../assets/totalrefundgraph.png'
import totalOrderGraph from  '../assets/totalordergraph.png'
import totalIncomeGraph from  '../assets/totalincomegraph.png'
import averageSalesGraph from  '../assets/averagesalesgraph.png'
import { BoxIcon, CartIcon, CoinIcon, RefundIcon, TrendDownIcon, TrendUpIcon } from "../assets/icons"
import ChartCard from "../components/ChartCard"
import OrdersCard from "../components/OrdersCard"
import TopPlatformCard from "../components/TopPlatformCard"

const Home = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#FAFAFA] dark:bg-[#1b1b1b] py-16 pt-24 lg:pt-32">
    <section className="w-full max-w-[1400px] grid grid-cols-5 gap-5 bg-[#FAFAFA] dark:bg-[#1b1b1b]">
      <ChartCard />
      <div className="w-full grid grid-cols-2 col-span-5 gap-3 lg:col-span-2 self-start">
      <StatsCard graph={totalOrderGraph} icon={<RefundIcon />} heading='Total Order' value='350' percentage='23.5%' trendIcon={<TrendUpIcon />} text='vs. previous month' textColor='text-[#34CAA5]' backGroundColor='bg-[#34caa43a]'  />
      <StatsCard graph={Graph} icon={<BoxIcon />} heading='Total refund' value='270' percentage='23.5%' trendIcon={<TrendDownIcon />} text='vs. previous month' textColor='text-[#ED544E]' backGroundColor='bg-[#ed534e31]'  />
      <StatsCard graph={averageSalesGraph} icon={<CartIcon />} heading='Average Sales' value='1567' percentage='23.5%' trendIcon={<TrendDownIcon />} text='vs. previous month' textColor='text-[#ED544E]' backGroundColor='bg-[#ed534e31]'  />
      <StatsCard graph={totalIncomeGraph} icon={<CoinIcon />} heading='Total Income' value='$350.000' percentage='23.5%' trendIcon={<TrendUpIcon />} text='vs. previous month' textColor='text-[#34CAA5]' backGroundColor='bg-[#34caa43a]'  />
      </div>
    </section>

    <section className="w-full max-w-[1400px] grid grid-cols-5 gap-5 bg-[#FAFAFA] dark:bg-[#1b1b1b] mt-5">
      <OrdersCard />
      <TopPlatformCard />
    </section>
    </section>
  )
}

export default Home