import { Button, Divider } from '@mui/material'
import React from 'react'
import { MdDelete } from "react-icons/md";
import QtyBox from '../../components/QtyBox';
import { Link } from 'react-router-dom';
import { MdLockOutline } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlBriefcase } from "react-icons/sl";
const CartPage = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='flex my-6'>
                <div className="w-[70%] ">
                    <div className='border rounded-md mx-4 my-4'>
                        <div className="border-b px-4 py-3">
                            <h1 className="font-medium text-lg">Shopping Cart</h1>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center gap-4 mb-5 mt-5">
                                <img
                                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-cart_default/hummingbird-printed-t-shirt.jpg"
                                    alt="Product Image"
                                    className="w-24 h-24 border rounded"
                                />
                                <div className="flex-1 flex flex-col">
                                    <h1 className="font-semibold mb-2">Apple AirPods Max Over-Ear Wireless Headphone</h1>
                                    <p className="leading-7">
                                        <span className='text-gray-600 font-[500] text-[15px] line-through mr-4'>$52.00</span>
                                        <span className='text-[#6D4AAE] text-[16px] font-[500]'>$42.00</span>
                                    </p>
                                    <p className="leading-7">
                                        <span className='text-[rgba(0,0,0,0.9)] font-[500] text-[15px]'>Color: </span>
                                        <span className='text-[rgba(0,0,0,0.6)] text-[14px]'>Grey</span>
                                    </p>
                                    <p className="leading-7"><span className='text-[rgba(0,0,0,0.9)] font-[500] text-[15px]'>Dimension:</span>
                                        <span className='text-[rgba(0,0,0,0.6)] text-[14px]'> 60x90cm</span>

                                    </p>
                                </div>
                                <div className="w-[80px] relative">
                                    <QtyBox />
                                </div>
                                <span className="font-semibold text-[#6D4AAE] ">$42.00</span>
                                <Button className="!text-[#6D4AAE] !bg-transparent px-4 py-2 rounded"><MdDelete className='text-[20px]' /></Button>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center gap-4 mb-5 mt-5">
                                <img
                                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-cart_default/hummingbird-printed-t-shirt.jpg"
                                    alt="Product Image"
                                    className="w-24 h-24 border rounded"
                                />
                                <div className="flex-1 flex flex-col">
                                    <h1 className="font-semibold mb-2">Apple AirPods Max Over-Ear Wireless Headphone</h1>
                                    <p className="leading-7">
                                        <span className='text-gray-600 font-[500] text-[15px] line-through mr-4'>$52.00</span>
                                        <span className='text-[#6D4AAE] text-[16px] font-[500]'>$42.00</span>
                                    </p>
                                    <p className="leading-7">
                                        <span className='text-[rgba(0,0,0,0.9)] font-[500] text-[15px]'>Color: </span>
                                        <span className='text-[rgba(0,0,0,0.6)] text-[14px]'>Grey</span>
                                    </p>
                                    <p className="leading-7"><span className='text-[rgba(0,0,0,0.9)] font-[500] text-[15px]'>Dimension:</span>
                                        <span className='text-[rgba(0,0,0,0.6)] text-[14px]'> 60x90cm</span>

                                    </p>
                                </div>
                                <div className="w-[80px] relative">
                                    <QtyBox />
                                </div>
                                <span className="font-semibold text-[#6D4AAE] ">$42.00</span>
                                <Button className="!text-[#6D4AAE] !bg-transparent px-4 py-2 rounded"><MdDelete className='text-[20px]' /></Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[30%]">
                    <div className=' relative border rounded-md mx-4 my-4 p-5 '>
                        {/* Items Summary */}
                        <div className="grid grid-cols-2 items-center mb-2">
                            <div>
                                <h1 className="text-[15px] font-[500]">3 items</h1>
                            </div>
                            <div className="text-right">
                                <h1 className="text-[15px] font-[500] text-red-700">$220.00</h1>
                            </div>
                        </div>

                        {/* Shipping Details */}
                        <div className="grid grid-cols-2 items-center mb-2">
                            <div>
                                <h1 className="text-[15px] font-[500]">Shipping</h1>
                            </div>
                            <div className="text-right">
                                <h1 className="text-[15px] font-[500] text-red-700">$7.00</h1>
                            </div>
                        </div>

                        {/* Divider */}
                        <Divider className="!my-4 !mb-4" />

                        {/* Total Excluding Tax */}
                        <div className="grid grid-cols-2 items-center mb-2">
                            <div>
                                <h1 className="text-[15px] font-[500]">Total (tax excl.)</h1>
                            </div>
                            <div className="text-right">
                                <h1 className="text-[15px] font-[500] text-red-700">$220.00</h1>
                            </div>
                        </div>

                        {/* Total Including Tax */}
                        <div className="grid grid-cols-2 items-center mb-2">
                            <div>
                                <h1 className="text-[15px] font-[500]">Total (tax incl.)</h1>
                            </div>
                            <div className="text-right">
                                <h1 className="text-[15px] font-[500] text-red-700">$227.00</h1>
                            </div>
                        </div>

                        {/* Additional Section (if needed) */}
                        <div className="grid grid-cols-2 items-center">
                            <div>
                                <h1 className="text-[15px] font-[500]">Grand Total</h1>
                            </div>
                            <div className="text-right">
                                <h1 className="text-[15px] font-[500] text-red-700">$227.00</h1>
                            </div>
                        </div>
                        <div className='buttomDiv mt-5 w-full px-5'>
                            <div className='flex items-center justify-center gap-3'>
                                <Link to='/cart' className='w-[80%]'>
                                    <Button className='!w-full !bg-red-600 !text-white !font-[600] !min-h-[30px] !h-[40px]'>
                                        Proceed to checkout
                                    </Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3 border rounded-md p-5 mx-4 mb-4 bg-gray-100'>
                        <MdLockOutline className='text-[30px] text-[#ab92db]' />
                        <div className='flex flex-col '>
                            <h1 className='text-[18px] font-[500]'>Security policy</h1>
                            <p className='text-[14px]'>(edit with the Customer Reassurance module)</p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3 border rounded-md p-5 mx-4 mb-4 bg-gray-100'>
                        <CiDeliveryTruck className='text-[30px] text-[#ab92db]' />
                        <div className='flex flex-col '>
                            <h1 className='text-[18px] font-[500]'>Delivery policy</h1>
                            <p className='text-[14px]'>(edit with the Customer Reassurance module)</p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3 border rounded-md p-5 mb-4 mx-4 bg-gray-100'>
                        <SlBriefcase className='text-[30px] text-[#ab92db]' />
                        <div className='flex flex-col '>
                            <h1 className='text-[18px] font-[500]'>Return policy</h1>
                            <p className='text-[14px]'>(edit with the Customer Reassurance module)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage