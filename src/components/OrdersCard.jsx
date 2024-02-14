import { useState } from "react"
import { orders } from "../../src/assets/constants"
import OrderItem from "./OrderItem"

const OrdersCard = () => {
    const [viewAll, setViewAll] = useState(false);
    
  return (
    <div className="w-full p-4 bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 rounded-xl col-span-5 lg:col-span-3 transition-all duration-300 ease-in-out self-start">
        <div className="w-full flex justify-between items-center">
            <h3 className='font-bold text-lg text-[#26282C] dark:text-white'>Last Orders</h3>
            <button aria-haspopup={true} aria-expanded={viewAll} aria-label="Click to show all orders" onClick={() => setViewAll(!viewAll)} className="p-0 bg-transparent border-0 outline-0 text-[16px] text-[#34CAA5] font-medium">See {viewAll ? 'Less' : 'All'}</button>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-hidden transition-all duration-300 ease-in-out">
            <div className=" w-[700px] sm:w-full grid grid-cols-6 items-center py-3">
                <h4 className="text-[#9CA4AB] col-span-2 self-center">Name</h4>
                <h4 className="text-[#9CA4AB] col-span-1 self-center justify-self-center">Date</h4>
                <h4 className="text-[#9CA4AB] col-span-1 self-center justify-self-center">Amount</h4>
                <h4 className="text-[#9CA4AB] col-span-1 self-center justify-self-center">Status</h4>
                <h4 className="text-[#9CA4AB] col-span-1 self-center justify-self-center">Invoice</h4>
            </div>
            <div className=" w-[700px] sm:w-full flex flex-col items-center justify-start md:justify-center transition-all duration-300 ease-in-out">
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