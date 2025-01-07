import React from 'react'
import '../ProductItem/style.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
const ProductItemListView = () => {
    return (
        <div className='productItem rounded-md overflow-hidden border-1 border-[rgb(0,0,0,0.1)] shadow-lg flex items-center mb-4'>
            <div className='group imageWrapper w-[25%] min-h-[180px] h-[215px] overflow-hidden rounded-md relative'>

                <img src='https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg' className='w-full' />
                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-700 text-white rounded-md px-2'>10%</span>
                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]
                 transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-red-700 group">
                        <MdZoomOutMap className='text-[16px] !text-black group-hover:text-white' />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-red-700 group">
                        <IoGitCompareOutline className='text-[16px] !text-black group-hover:text-white' />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-red-700 group">
                        <FaRegHeart className='text-[16px] !text-black group-hover:text-white' />
                    </Button>

                </div>
            </div>
            <div className='info p-3 py-3 px-8 w-[75%]'>
                <h4 className='text-[12px] transition-all'><Link to="/">RARE RABBIT</Link></h4>
                <h4 className='text-[20px] title font-[500] mt-2 text-[rgba(0,0,0,0.9)] transition-all mb-1'>
                    <Link to="/product/1">
                        Men Alias-N Regular Fit Spread Collar Shirt
                    </Link>
                </h4>
                <p className='text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4">
                    <span className='oldprice line-through font-[500] text-gray-500 text-[16px]'>$58.00</span>
                    <span className='newprice  text-red-600 font-[600]'>$58.00</span>
                </div>
                <div className='mt-2'>
                    <Button className="!bg-red-600 !text-white hover:!bg-[#171717] gap-2"><MdOutlineShoppingCart className='text-[20px] ml-2' />Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItemListView