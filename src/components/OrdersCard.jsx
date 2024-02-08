import { useState } from "react"
import { orders } from "../../src/assets/constants"
import OrderItem from "./OrderItem"

const OrdersCard = () => {
    const [viewAll, setViewAll] = useState(false);
    
  return (
    <div className="w-full p-4 bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 rounded-xl col-span-5 lg:col-span-3 overflow-auto transition-all duration-300 ease-in-out self-start">
        <div className="w-full flex justify-between items-center">
            <h3 className='font-bold text-lg text-[#26282C] dark:text-white'>Last Orders</h3>
            <button aria-haspopup={true} aria-expanded={viewAll} aria-label="Click to show all orders" onClick={() => setViewAll(!viewAll)} className="p-0 bg-transparent border-0 outline-0 text-[16px] text-[#34CAA5] font-medium">See {viewAll ? 'Less' : 'All'}</button>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-hidden transition-all duration-300 ease-in-out">
            <div className="w-full flex items-center justify-start py-3">
                <h4 className="text-[#9CA4AB] mr-[158px] lg:mr-48 2xl:mr-52">Name</h4>
                <h4 className="text-[#9CA4AB] mr-[105px] lg:mr-[134px] 2xl:mr-44">Date</h4>
                <h4 className="text-[#9CA4AB] mr-[58px] lg:mr-[82px]">Amount</h4>
                <h4 className="text-[#9CA4AB] mr-[30px] lg:mr-[52px] 2xl:mr-[86px]">Status</h4>
                <h4 className="text-[#9CA4AB]">Invoice</h4>
            </div>
            <div className="w-full transition-all duration-300 ease-in-out">
                {viewAll && (
                    orders.map((order) => (
                        <OrderItem key={order.id} id={order.id} imageUrl={order.imageUrl} name={order.name} amount={order.amount} date={order.date}  status={order.status} statusColor={order.statusColor}/>
                    ))
                )}
                {viewAll === false && (
                    orders.slice(0,5).map((order) => (
                        <OrderItem key={order.id} id={order.id} imageUrl={order.imageUrl} name={order.name} amount={order.amount} date={order.date}  status={order.status} statusColor={order.statusColor}/>
                    ))
                )}
            </div>
        </div>
    </div>
  )
}

export default OrdersCard