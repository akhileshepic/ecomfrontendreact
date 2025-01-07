import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ProductZoom from '../../components/ProductZoom';
import { Button, Rating } from '@mui/material';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";


const ProductDetails = () => {
    const [productActionIndex, setProductActionIndex] = useState(null)
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <>
            <div className='container mx-auto py-4 px-4'>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/product"
                        >
                            Product
                        </Link>

                    </Breadcrumbs>
                </div>
            </div>
            <section>
                <div className='container mx-auto pl-4 flex gap-4 '>
                    <div className='productZoomContainer w-[35%] pb-4'>
                        <ProductZoom />
                    </div>
                    <div className='productContent w-[65%]'>
                        <h1 className='text-[25px] font-[600] mb-2'>Chikankari Woven Kurta</h1>
                        <div className='flex items-center gap-3 '>
                            <span className='text-gray-400 text-[13px]'>Brands : <span className='font-[500] text-black'>House of Chikankari</span></span>


                            <Rating name="size-small" defaultValue={4} size="small" readOnly />

                            <span className='text-gray-400 text-[15px]'>2 Review</span>
                        </div>

                        <div className="flex items-center gap-4 mt-2 mb-2">
                            <span className='oldprice line-through font-[500] text-gray-500 text-[16px]'>$58.00</span>
                            <span className='newprice  text-red-600 font-[600]'>$58.00</span>
                            <span className='text[14px]'>Available In Stock: <span className='text-green-600 text-[14px] font-bold'>147 Items</span></span>
                        </div>

                        <p className='mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className='flex items-center gap-3'>
                            <span className='text-[16px]'>Size</span>
                            <div className='size flex items-center gap-1 py-2'>
                                <Button className={`${productActionIndex === 0 ? '!bg-red-800 !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                                <Button className={`${productActionIndex === 1 ? '!bg-red-800 !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                                <Button className={`${productActionIndex === 2 ? '!bg-red-800 !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                                <Button className={`${productActionIndex === 3 ? '!bg-red-800 !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                            </div>
                        </div>

                        <div className='mt-2 flex items-center gap-3'>
                            <div className='w-[70px]'>
                                <QtyBox />
                            </div>
                            <Button className='!bg-red-700 !text-white'>
                                <MdOutlineShoppingCart className='text-[18px]' /> Add to Cart
                            </Button>
                        </div>
                        <div className='mt-4 flex items-center gap-4'>
                            <span className='flex items-center justify-center cursor-pointer gap-2 text-[14px]'><FaRegHeart /> Addto Wishlist</span>
                            <span className='flex items-center justify-center cursor-pointer gap-2 text-[14px]'><IoGitCompareOutline /> Addto Compare</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductDetails