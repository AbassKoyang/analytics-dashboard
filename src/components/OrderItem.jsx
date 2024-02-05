import { useEffect, useRef, useState } from "react"
import { InvoiceIcon } from "../assets/icons"

const OrderItem = ({id,imageUrl, name, date, amount, status, statusColor}) => {
  const [viewInvoice, setViewInvoice] = useState(false);
  const containerRef = useRef(null);
  const handleDocumentClick = (event) => {
    if (!event.target.closest('.modal-content')) {
       if (viewInvoice) {
        setViewInvoice(false);
       }
    }
  };
  
  return (
    <div onClick={handleDocumentClick} className="modal-container relative w-[600px] lg:w-full flex items-center justify-between py-3 border-t border-y-[#EDF2F6] dark:border-y-white/35">
        <div className="flex items-center gap-1 md:gap-3">
            <img src={imageUrl} alt="Orderer's pic" className="size-8" />
            <p className="text-[#3A3F51] dark:text-white text-sm md:text-[16px]">{name}</p>
        </div>

        <p className="text-[#737373] dark:text-white/85 text-sm md:text-[16px]">{date}</p>
        <p className="text-[#0D062D] dark:text-white/90 text-sm md:text-[16px]">{amount}</p>
        <p className={`${statusColor} text-sm md:text-[16px]`}>{status}</p>
        <button onClick={() => setViewInvoice(!viewInvoice)} className="text-[#0D062D] dark:text-white/90 flex items-center gap-1 text-sm bg-transparent outline-0 border-0 hover:bg-[#34caa43a] hover:px-2 hover:py-1 rounded-2xl transition-all duration-100 ease-in-out"> <InvoiceIcon className='fill-[#0D062D] dark:fill-white/90' /> 
        View
        </button>
        <div ref={containerRef}  className={`${viewInvoice ? 'block' : 'hidden'} modal-content w-[400px] p-10 absolute top-[50px] right-[80px] z-20 bg-white dark:bg-black shadow-lg rounded-md`}>
          <div className="flex w-full items-center justify-between mb-3">
            <div className="">
              <h1 className="text-lg font-bold text-[#737373] dark:text-white/85">Invoice no.</h1>
              <p className="text-2xl font-bold text-black dark:text-white">{id}</p>
            </div>
            <div className="">
              <h1 className="text-lg font-bold  text-[#737373] dark:text-white/85">Date</h1>
              <p className="text-2xl font-bold text-black dark:text-white">{date}</p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#737373] dark:text-white/85">Description</h3>
              <h3 className="text-lg font-semibold text-[#737373] dark:text-white/85">Quantity</h3>
              <h3 className="text-lg font-semibold text-[#737373] dark:text-white/85">Price</h3>
            </div>
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-[16px] font-medium text-black dark:text-white">Lorem, ipsum</p>
              <p className="text-[16px] font-medium text-black dark:text-white">1</p>
              <p className="text-[16px] font-medium text-black dark:text-white">$50000</p>
            </div>
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-[16px] font-medium text-black dark:text-white">Lorem, ipsum</p>
              <p className="text-[16px] font-medium text-black dark:text-white">2</p>
              <p className="text-[16px] font-medium text-black dark:text-white">$50000</p>
            </div>
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-[16px] font-medium text-black dark:text-white">Lorem, ipsum</p>
              <p className="text-[16px] font-medium text-black dark:text-white">3</p>
              <p className="text-[16px] font-medium text-black dark:text-white">$50000</p>
            </div>
            <div className="flex items-center justify-end gap-1 my-3">
              <h4 className="text-lg font-semibold text-[#737373] dark:text-white/85">Total: <p className="text-xl font-bold text-black dark:text-white">{amount}</p></h4>
            </div>

            <p className="text-[16px] font-medium text-[#737373] dark:text-white/85 mb-1">Sold to:</p>
            <h3 className="text-lg font-semibold text-black dark:text-white">{name}</h3>
            <h3 className="text-lg font-semibold text-black dark:text-white">anonymous@gmail.com</h3>
          </div>
        </div>
    </div>
  )
}

export default OrderItem