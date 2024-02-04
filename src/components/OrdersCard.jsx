import { orders } from "../assets/constants"
import OrderItem from "./OrderItem"

const OrdersCard = () => {
  return (
    <div className="w-full p-4 bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 rounded-xl col-span-3">
        <div className="w-full flex justify-between items-center">
            <h3 className='font-bold text-lg text-[#26282C] dark:text-white'>Last Orders</h3>
            <button className="p-0 bg-transparent border-0 outline-0 text-[16px] text-[#34CAA5] font-medium">See all</button>
        </div>
        <div className="w-full">
            <div className="w-full flex items-center justify-between">
                <h4 className="text-[#9CA4AB]">Name</h4>
                <h4 className="text-[#9CA4AB]">Date</h4>
                <h4 className="text-[#9CA4AB]">Amount</h4>
                <h4 className="text-[#9CA4AB]">Status</h4>
                <h4 className="text-[#9CA4AB]">Invoice</h4>
            </div>
            <div className="w-full flex flex-col">
                {orders.map((order) => (
                    <OrderItem key={order.id} name={order.name} amount={order.amount} date={order.date}  status={order.status} statusColor={order.statusColor}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OrdersCard