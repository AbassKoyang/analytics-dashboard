import { useState } from "react"
import { toast } from "react-toastify";

const ComingSoon = () => {
    const [emailValue, setEmailValue] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
    const isDisabled =  emailValue.length === 0 || isSubscribing;
    const emailRegExp = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isDisabled && emailRegExp.test(emailValue)){
        setIsSubscribing(true);
        setTimeout(() => {
            setIsSubscribing(false);
            toast.success('Subscribed successfully!', {
                position: 'bottom-right',
                draggable: true,
                theme: 'dark',
            });
            setEmailValue("");
        }, 1000);
    } else if (emailValue.length === 0) {
        toast.warning('Email must be provided!', {
            position: 'bottom-right'
        })
    } else if (!emailRegExp.test(emailValue)) {
        toast.warning('Email is invalid!', {
            position: 'bottom-right'
        })
    }
}
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className='text-center text-4xl md:text-5xl font-extrabold text-black dark:text-white'>Coming Soon</h1>
        <p className='w-full max-w-md mt-4 text-center text-black/95 dark:text-white/95 text-sm md:text-[16px] leading-loose'>This feature is currently under development and will be available soon. We are currently working on a new version of our platform. Stay tuned for updates and features!</p>
        <form className="flex items-center w-full h-14 max-w-lg flex-wrap mt-6 bg-white dark:bg-black p-2 rounded-3xl overflow-hidden drop-shadow-sm focus-within:border focus-within:border-[#cac8c8] focus-within:dark:border-white/35">
            <input onChange={(e) => setEmailValue(e.target.value)} className='w-[75%] h-full bg-white dark:bg-black text-black/90 dark:text-white/90 text-sm outline-0 border-0 px-3' type="email" placeholder="Enter email" required aria-required value={emailValue} />
        <button onClick={handleSubmit} type="submit" className='h-full w-[25%] rounded-2xl bg-black dark:bg-white text-white dark:text-black font-medium text-sm md:text-[16px] disabled:opacity-75' disabled={isDisabled}>
            {isSubscribing ? 'Subscribing...' : 'Subscribe'}
        </button>
        </form>
    </div>
  )
}

export default ComingSoon