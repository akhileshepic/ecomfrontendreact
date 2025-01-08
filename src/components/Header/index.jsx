import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Navbar from '../Navbar';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from '../../App';


const Header = () => {
    const context = useContext(MyContext);
    return (
        <div>
            <div className='topsidebar border-b pb-4'>
                <div className="bg-customPurple flex">
                    <div className="w-[1180px] mx-auto py-2">
                        <div className="text-center text-white">
                            <p className="text-[12px] font-[400]">
                                Due to the <span className="font-[600]">COVID 19</span> epidemic, orders may be processed with a slight delay
                            </p>
                        </div>
                    </div>
                </div>
                {/* header */}
                <div className="flex justify-center items-center py-6">
                    <div className="col1 w-[15%]">
                        <Link to="/">
                            <img src="../../../logo.jpg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="col1 w-[12%]">
                        <Button className="!w-full !leading-4 !border !border-solid !border-black !border-opacity-10 p-4 !capitalize hover:shadow-[0_3px_5px_#00000017]">
                            <div className="flex flex-col w-full justify-start items-start">
                                <span className="text-[#0006]">Your Location</span>
                                <span className="text-left text-[#6d4aae] font-[600]">All</span>
                            </div>
                        </Button>
                    </div>
                    <div className="col1 w-[38%] flex   px-5">
                        <div className="bg-[#e5e5e5] flex w-full h-[50px] rounded relative">
                            <input type="text" placeholder="Search for Products...." className="w-full bg-transparent outline-none px-4 h-[50px]" />
                            <IoSearchOutline className='absolute right-5 top-4' size={22} />
                        </div>

                    </div>
                    <div className="col1 w-[24%]">
                        <div className='flex justify-end items-center'>
                            <Link to="/login">
                                <Button className='!bg-customPurple !text-white !border !rounded-[30px] !px-6 !capitalize'>Sign In</Button>
                            </Link>
                            <IconButton aria-label="100" className="!bg-[#fff1ee] !ml-4 !w-[45px] !h-[45px] !border !rounded-[50%] !border-solid !text-[#0000001a]">
                                <Badge color="error" badgeContent={0} showZero anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            transform: 'translate(10px, -20px)', // Adjust badge position
                                        },
                                    }}>
                                    <FaRegHeart />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="100" className="!bg-[#fff1ee] !ml-4 !w-[45px] !h-[45px] !border !rounded-[50%] !border-solid !text-[#0000001a]">
                                <Badge color="error" badgeContent={1} showZero anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            transform: 'translate(10px, -20px)', // Adjust badge position
                                        },
                                    }}>
                                    <IoGitCompareOutline />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="100" className="!bg-[#fff1ee] !ml-4 !w-[45px] !h-[45px] !border !rounded-[50%] !border-solid !text-[#0000001a]" onClick={() => context.setOpenCartPanel(!context.openCartPanel)}>
                                <Badge color="error" badgeContent={0} showZero anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            transform: 'translate(10px, -20px)', // Adjust badge position
                                        },
                                    }}>
                                    <MdOutlineShoppingCart />
                                </Badge>
                            </IconButton>

                        </div>

                    </div>
                </div>
                {/* Navar */}

                <div className='w-[90%] mx-auto'>
                    <Navbar />
                </div>
            </div>

        </div>
    );
};

export default Header;
