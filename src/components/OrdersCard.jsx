const OrdersCard = () => {
  return (
    <div className="w-full p-4 bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 rounded-xl col-span-3">
        <div className="w-full flex justify-between items-center">
            <h3 className='font-bold text-lg text-[#26282C] dark:text-white'>Last Orders</h3>
            <button className="p-0 bg-transparent border-0 outline-0 text-[16px] text-[#34CAA5] font-medium">See all</button>
        </div>
        <table>
        <tr>
        <th></th>
        <th>January</th>
        <th>February</th>
        <th>March</th>
    </tr>
    <tr>
        <th>Week 1</th>
        <td>10</td>
        <td>15</td>
        <td>12</td>
    </tr>
    <tr>
        <th>Week 2</th>
        <td>8</td>
        <td>13</td>
        <td>11</td>
    </tr>
    <tr>
        <th>Week 3</th>
        <td>9</td>
        <td>14</td>
        <td>10</td>
    </tr>
</table>
    </div>
  )
}

export default OrdersCard