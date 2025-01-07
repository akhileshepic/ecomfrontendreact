import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";

const Sidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);

    return (
        <div className="sidebar">

            <div className="box p-3">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">
                    Shop by Category
                    <Button onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)} className="!text-black !mx-auto !w-[30px] !h-[30px] !min-w-[30px] !rounded-full">
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }

                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll relative px-4 -left-[6px]">
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Fashion"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Electronics"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Bags"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Footwear"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Groceries"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Beauty"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Wellness"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Jewellery"
                            className="w-full"
                        />
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Sidebar;
