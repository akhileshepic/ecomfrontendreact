import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseOutline } from "react-icons/io5";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";

const CategoryPanel = ({ isOpenCatPanel, closePanel }) => {
    const [subMenuIndex, setSubmenuIndex] = useState(null);

    // Handle submenu toggle
    const handleSubmenuToggle = (index) => {
        // Toggle submenu open/close by setting the index
        setSubmenuIndex(subMenuIndex === index ? null : index);
        console.log(subMenuIndex)
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
                Shop By Category <IoCloseOutline className="cursor-pointer text-[20px]" onClick={closePanel} />
            </h3>

            <div className="scroll">
                <ul className="w-full">
                    {/* Category 1 */}
                    <li className="list-none flex items-center relative flex-col">
                        <Button className="w-full !capitalize !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fashion</Button>
                        {subMenuIndex === 0 ? (
                            <FaRegSquareMinus
                                className="absolute top-[10px] right-[15px]"
                                cursorPointer
                                onClick={() => handleSubmenuToggle(0)}
                            />
                        ) : (
                            <FaRegSquarePlus
                                className="absolute top-[10px] right-[15px]"
                                onClick={() => handleSubmenuToggle(0)}
                            />
                        )}
                        {subMenuIndex === 0 && (
                            <ul className="submenu w-full pl-3">
                                <li className="list-none flex items-center relative ">
                                    <Button className="w-full !capitalize !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Subcategory 1</Button>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Category 2 */}
                    <li className="list-none flex items-center relative flex-col">
                        <Button className="w-full !capitalize !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Electronics</Button>
                        {subMenuIndex === 1 ? (
                            <FaRegSquareMinus
                                className="absolute top-[10px] right-[15px]"
                                cursorPointer
                                onClick={() => handleSubmenuToggle(1)}
                            />
                        ) : (
                            <FaRegSquarePlus
                                className="absolute top-[10px] right-[15px]"
                                onClick={() => handleSubmenuToggle(1)}
                            />
                        )}
                        {subMenuIndex === 1 && (
                            <ul className="submenu w-full pl-3">
                                <li className="list-none flex items-center relative ">
                                    <Button className="w-full !capitalize !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Subcategory 1</Button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </Box>
    );

    return (
        <Drawer open={isOpenCatPanel} onClose={closePanel}>
            {DrawerList}
        </Drawer>
    );
};

export default CategoryPanel;
