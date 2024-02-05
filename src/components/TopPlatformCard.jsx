import Platforms from "./Platforms"

const TopPlatformCard = () => {
  return (
    <section className="col-span-5 lg:col-span-2 p-4 bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35">
        <Platforms name="BookBazar" progressBarColor='bg-[#6160DC]' progressPercentage='w-[70%]' amount=' $2,500,000' percentage='+15%' />
    </section>
  )
}

export default TopPlatformCard