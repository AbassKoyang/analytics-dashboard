import { InvoiceIcon } from "../assets/icons"

const OrderItem = ({imageUrl, name, date, amount, status, statusColor}) => {
  return (
    <div className="flex items-center justify-between py-3 border-t border-y-[#979797] dark:border-y-white/35">
        <div className="flex items-center gap-2">
            <img src={imageUrl} alt="Orderer's pic" className="size-10" />
            <p className="text-[#3A3F51]">{name}</p>
        </div>

        <p className="text-[#737373]">{date}</p>
        <p className="text-[#0D062D]">{amount}</p>
        <p className={`${statusColor}`}>{status}</p>
        <span className="text-[#0D062D] flex items-center gap-1"> <InvoiceIcon /> View</span>
    </div>
  )
}

export default OrderItem