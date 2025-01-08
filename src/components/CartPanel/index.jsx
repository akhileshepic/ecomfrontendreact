import { Button, Divider } from '@mui/material'
import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import { MyContext } from '../../App';
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';
const CartPanel = () => {
    const context = useContext(MyContext)
    return (
        <div className='cartPop relative'>
            <div className='w-full flex justify-between items-center px-5 py-2'>
                <h1 className='text-[16px] font-[600]'>Shopping Cart (0)</h1>
                <Button className='!min-w-[30px] !bg-transparent' onClick={() => context.setOpenCartPanel(false)}><IoMdClose className='text-[25px] !text-[rgba(0,0,0,0.9)]' /></Button>
            </div>
            <Divider />
            <div className="CartItem h-[250px] overflow-y-auto">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            {/* tatal details */}
            <div className='tatalsumary rounded-md mt-4 border relative'>
                <div className='grid grid-cols-2 px-5 pb-3'>
                    <div className='left'>
                        <h1 className='text-[15px] font-[500]'>3 items</h1>
                    </div>
                    <div className='flex '>
                        <h1 className='text-[15px] font-[500] ml-auto text-red-700'>$220.00</h1>
                    </div>
                </div>
                <div className='grid grid-cols-2  px-5 pb-3'>
                    <div className='left'>
                        <h1 className='text-[15px] font-[500]'>Shipping</h1>
                    </div>
                    <div className='flex '>
                        <h1 className='text-[15px] font-[500] ml-auto text-red-700'>$7.00</h1>
                    </div>
                </div>
                <Divider />
                <div className='grid grid-cols-2 px-5 pb-3 mt-3'>
                    <div className='left'>
                        <h1 className='text-[15px] font-[500]'>Total (tax excl.)</h1>
                    </div>
                    <div className='flex '>
                        <h1 className='text-[15px] font-[500] ml-auto text-red-700'>$220.00</h1>
                    </div>
                </div>
                <div className='grid grid-cols-2  px-5 pb-3'>
                    <div className='left'>
                        <h1 className='text-[15px] font-[500]'>Total (tax excl.)</h1>
                    </div>
                    <div className='flex '>
                        <h1 className='text-[15px] font-[500] ml-auto text-red-700'>$7.00</h1>
                    </div>
                </div>
                <div className='grid grid-cols-2  px-5 pb-3'>
                    <div className='left'>
                        <h1 className='text-[15px] font-[500]'>Taxes:</h1>
                    </div>
                    <div className='flex '>
                        <h1 className='text-[15px] font-[500] ml-auto text-red-700'>$7.00</h1>
                    </div>
                </div>
            </div>

            {/* tatal details */}
            <div className='buttomDiv absolute -bottom-[80px] left-0 w-full px-5'>
                <div className='flex items-center justify-between gap-3'>
                    <Link to='/cart' className='w-full'>
                        <Button className='!w-full !bg-red-600 !text-white !font-[600] !min-h-[30px] !h-[40px]'>
                            View Cart
                        </Button>
                    </Link>
                    <Link to='/' className='w-full'>
                        <Button className='!w-full !bg-red-600 !text-white !font-[600] !min-h-[30px] !h-[40px]'>
                            CheckOut
                        </Button>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default CartPanel