import { InvoiceIcon } from "../assets/icons"

const OrderItem = ({imageUrl, name, date, amount, status, statusColor}) => {
  return (
    <div className="w-[600px] lg:w-full flex items-center justify-between py-3 border-t border-y-[#EDF2F6] dark:border-y-white/35">
        <div className="flex items-center gap-1 md:gap-3">
            <img src={imageUrl} alt="Orderer's pic" className="size-8" />
            <p className="text-[#3A3F51] dark:text-white text-sm md:text-[16px]">{name}</p>
        </div>

        <p className="text-[#737373] dark:text-white/85 text-sm md:text-[16px]">{date}</p>
        <p className="text-[#0D062D] dark:text-white/90 text-sm md:text-[16px]">{amount}</p>
        <p className={`${statusColor} text-sm md:text-[16px]`}>{status}</p>
        <button className="text-[#0D062D] dark:text-white/90 flex items-center gap-1 text-sm bg-transparent outline-0 border-0"> <InvoiceIcon /> View</button>
    </div>
  )
}

export default OrderItem