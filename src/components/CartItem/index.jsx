import { Button, Divider } from '@mui/material';
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const CartItem = () => {
    return (
        <>
            <div className='flex gap-2  px-5 py-2'>

                <div className='img w-[25%] border '>
                    <Link to="/product/22424">
                        <img src='https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-cart_default/hummingbird-printed-t-shirt.jpg' alt='image' className='w-full  h-[90px]' />
                    </Link>
                </div>
                <div className='info w-[75%] flex gap-2'>

                    <div className='w-[90%]'>
                        <h3 className='text-[14px] font-semibold leading-6'>
                            <Link to="/product/22424">
                                Apple AirPods Max Over-Ear Wireless Headphone
                            </Link>
                        </h3>
                        <div className='flex items-center justify-start gap-1'>
                            <span className='text-[rgba(0,0,0,0.8)]'>1</span>
                            <span><IoMdClose /></span>
                            <sapn className='text-[rgba(231,55,55,0.9)] text-[15px] font-[500]'>$42.00</sapn></div>
                    </div>
                    <div className='w-[10%]'>
                        <Button className='!min-h-[30px] !min-w-[30px] !h-[30px] !w-[30px]'><RiDeleteBin6Line className='text-[20px] text-[rgba(0,0,0,0.9)]' /></Button>
                    </div>
                </div >

            </div >
            <Divider />
        </>
    )
}

export default CartItem