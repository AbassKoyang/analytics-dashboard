import { useEffect, useRef, useState } from "react"
import { InvoiceIcon } from "../assets/icons";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const OrderItem = ({id,imageUrl, name, date, amount, status, statusColor}) => {

  const [viewInvoice, setViewInvoice] = useState(false);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDocumentClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setViewInvoice(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  

  const downloadImage = () => {
    setIsLoading(true);
    const element = document.getElementById(`downloadable-invoice${id}`);

    html2canvas(element).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, `${name}-invoice.png`);
        setIsLoading(false);
      });
    });
  };

  return (
    <div ref={containerRef} className="w-[600px] lg:w-full flex items-center justify-between py-3 border-t border-y-[#EDF2F6] dark:border-y-white/35">
        <div className="flex items-center gap-1 md:gap-3">
            <img src={imageUrl} alt="Orderer's pic" className="size-8" />
            <p className="text-[#3A3F51] dark:text-white text-sm md:text-[16px]">{name}</p>
        </div>

        <p className="text-[#737373] dark:text-white/85 text-sm md:text-[16px]">{date}</p>
        <p className="text-[#0D062D] dark:text-white/90 text-sm md:text-[16px]">{amount}</p>
        <p className={`${statusColor} text-sm md:text-[16px]`}>{status}</p>
        <button onClick={() => setViewInvoice(!viewInvoice)} aria-haspopup={true} aria-expanded={viewInvoice} aria-label="Click to see invoice." className="text-[#0D062D] dark:text-white/90 flex items-center gap-1 text-sm bg-transparent outline-0 border-0 hover:bg-[#34caa43a] hover:px-2 hover:py-1 rounded-2xl transition-all duration-100 ease-in-out"> <InvoiceIcon className='fill-[#0D062D] dark:fill-white/90' /> 
        View
        </button>
        <div className={`${viewInvoice ? 'block' : 'hidden'} modal-content w-[400px] p-7 fixed bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] z-20 bg-white dark:bg-black shadow-lg dark:border dark:border-white/35 rounded-md`}>
        <div className="w-full p-3" id={`downloadable-invoice${id}`}>
          <div className="flex w-full items-center justify-between mb-3">
            <div className="">
              <h1 className="text-sm md:text-lg font-bold text-[#737373] dark:text-white/85">Invoice no.</h1>
              <p className="text-lg md:text-2xl font-bold text-black dark:text-white">{id}</p>
            </div>
            <div className="">
              <h1 className="text-sm md:text-lg font-bold  text-[#737373] dark:text-white/85">Date</h1>
              <p className="text-lg md:text-2xl font-bold text-black dark:text-white">{date}</p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-sm md:text-lg font-semibold text-[#737373] dark:text-white/85">Description</h3>
              <h3 className="text-sm md:text-lg font-semibold text-[#737373] dark:text-white/85">Quantity</h3>
              <h3 className="text-sm md:text-lg font-semibold text-[#737373] dark:text-white/85">Price</h3>
            </div>
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">Lorem, ipsum</p>
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">1</p>
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">$50000</p>
            </div>
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">Lorem, ipsum</p>
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">2</p>
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">$50000</p>
            </div>
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">Lorem, ipsum</p>
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">3</p>
              <p className="text-[12px] md:text-[16px] font-medium text-black dark:text-white">$50000</p>
            </div>
            <div className="flex items-center justify-end gap-1 my-3">
              <h4 className="text-sm md;text-lg font-semibold text-[#737373] dark:text-white/85">Total: <p className="text-xl font-bold text-black dark:text-white">{amount}</p></h4>
            </div>

            <p className="text-[12px] md:text-[16px] font-medium text-[#737373] dark:text-white/85 mb-1">Sold to:</p>
            <h3 className="text-sm md:text-lg font-semibold text-black dark:text-white">{name}</h3>
            <h3 className="text-sm md:text-lg font-semibold text-black dark:text-white">anonymous@gmail.com</h3>
          </div>

        </div>
        <div className="w-full flex items-center justify-center mt-5">
              <button onClick={downloadImage} className="bg-[#34CAA5] text-sm text-white font-semibold px-3 py-2 rounded-3xl disabled:opacity-85" disabled={isLoading}>{isLoading ? 'Downloading image...' : 'Download as Image'}</button>
        </div>
        </div>
    </div>
  )
}

export default OrderItem