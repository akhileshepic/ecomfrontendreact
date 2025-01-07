import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CategoryPanel from '../CategoryPanel';
const Navbar = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {

        setIsOpenCatPanel(true); // Open Drawer
    };

    const closeCategoryPanel = () => {
        setIsOpenCatPanel(false); // Close Drawer
    };
    return (
        <div className='flex  items-center'>
            <div className='w-[15%]'>
                <Button className='!bg-customPurple !text-white !w-full !border !rounded-[20px]' onClick={openCategoryPanel} ><FaAlignJustify /><span className='ml-2 mr-2 font-[600]'>All Category </span><FaAngleDown /></Button>
            </div>
            <div className="w-[80%]">
                <ul className="flex w-full justify-between ml-5">
                    <li className="list-none relative group">
                        <Link to="/">
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">
                                Fashion
                            </Button>
                        </Link>
                        {/* Submenu */}
                        <div className="submenu absolute top-[100%] z-50 left-[0px] min-w-[150px] bg-white shadow-md rounded-br-lg rounded-bl-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <ul>
                                <li className="list-none">
                                    <Button className="!w-full !justify-start !px-3 !capitalize !text-black hover:bg-[#f1f1f1]">
                                        <span className="!text-left">Men</span>
                                    </Button>
                                </li>
                                <li className="list-none">
                                    <Button className="!w-full !justify-start !px-3 !capitalize !text-black hover:bg-[#f1f1f1]">
                                        Women
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="list-none relative group">
                        <Link to="/electronics" >
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">Electronics</Button>
                        </Link>
                        <div className="submenu absolute top-[100%] z-50 left-[0px] min-w-[150px] bg-white shadow-md rounded-br-lg rounded-bl-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <ul>
                                <li className="list-none">
                                    <Button className="!w-full !justify-start !px-3 !capitalize !text-black hover:bg-[#f1f1f1]">
                                        <span className="!text-left">Laptop</span>
                                    </Button>
                                </li>
                                <li className="list-none">
                                    <Button className="!w-full !justify-start !px-3 !capitalize !text-black hover:bg-[#f1f1f1]">
                                        Mobile
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/" >
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">Bags</Button>
                        </Link></li>
                    <li>
                        <Link to="/" >
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">Footwear</Button>
                        </Link></li>
                    <li>
                        <Link to="/" >
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">Groceries</Button>
                        </Link></li>
                    <li>
                        <Link to="/" >
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">Beauty</Button>
                        </Link></li>
                    <li>
                        <Link to="/" >
                            <Button className="!font-[500] !border !rounded-[20px] !px-6 hover:bg-[#f1f1f1] !text-black">Wellness</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <CategoryPanel isOpenCatPanel={isOpenCatPanel} closePanel={closeCategoryPanel} />
        </div>

    )
}

export default Navbar