import React, { useState } from 'react'
import { Button } from '@mui/material'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const QtyBox = () => {
  const [qtyVal, setQtyVal] = useState(1);
  const minusQty = () => {
    if (qtyVal > 1) {

      setQtyVal(qtyVal - 1)
    }
  }
  const plusQty = () => {
    setQtyVal(qtyVal + 1)
  }
  return (
    <div className='qtybox flex items-center relative'>
      <input type="number" className='w-full h-[38px] p-1 text-[15px] focus:outline-none border rounded-md border-[#000] pl-5' value={qtyVal} />
      <div className='flex items-center flex-col justify-between absolute top-0 right-0 z-50'>
        <Button className='!min-w-[20px] !w-[25px] !h-[18px] !text-black !rounded-none' onClick={plusQty}><MdOutlineKeyboardArrowUp className='text-[12px]' /></Button>
        <Button className='!min-w-[20px] !w-[25px] !h-[20px] !text-black !rounded-none' onClick={minusQty}><MdOutlineKeyboardArrowDown className='text-[12px]' /></Button>
      </div>


    </div>

  )
}

export default QtyBox