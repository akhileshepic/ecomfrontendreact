import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import { Button } from '@mui/material';
import { IoGridSharp } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const ProductListing = () => {
    const [itemView, setItemView] = useState('list');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(itemView)
    return (

        <div className='py-8'>
            <div className='container mx-auto px-4'>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/product"
                        >
                            Product
                        </Link>

                    </Breadcrumbs>
                </div>
            </div>
            <div className='container mx-auto flex gap-3'>

                <div className='sidebarWrapper w-[20%] h-full'>
                    <Sidebar />
                </div>
                <div className='rightContent w-[80%]'>
                    <div className='p-2 w-full mb-3 rounded-md flex items-center justify-between bg-gray-100'>
                        <div className='col1 flex items-center itemViewActions'>
                            <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'list' && 'active'}`}
                                onClick={() => setItemView('list')}>
                                <BsFillGrid3X3GapFill className='text-[rgb(0,0,0,0.7)]' />
                            </Button>
                            <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'grid' && 'active'}`}
                                onClick={() => setItemView('grid')}>
                                <IoGridSharp className='text-[rgb(0,0,0,0.7)]' />
                            </Button>

                            <span className='text-[14px] font-[500] pl-3 text-[rgb(0,0,0,0.7)]'>There are 27 products</span>
                        </div>
                        <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
                            <span className='text-[14px] font-[500] pl-3 text-[rgb(0,0,0,0.7)]'>Short By</span>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}

                                className='!bg-white !text-[12px] !text-[#000] !capitalize !py-2'
                            >
                                Sales, heighest to lowest
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Sales, heighest to lowest</MenuItem>
                                <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Relevant</MenuItem>
                                <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Name, A t Z</MenuItem>
                                <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Name, Z t A</MenuItem>
                                <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Price,low to high</MenuItem>
                                <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Price,high to low</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className={`grid ${itemView === 'grid' ? 'grid-cols-4 md:grid-cols-4 ' : 'grid-cols-1 md:grid-cols-1'}gap-4`}>
                        {
                            itemView === 'grid' ?
                                <>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </>
                                :
                                <>
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />

                                </>

                        }

                    </div>
                    <div className='flex items-center justify-center  mt-5'>
                        <Pagination count={10} showFirstButton showLastButton />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductListing