import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCategorySlider from '../../components/HomeCategorySlider'
import AddsBannerSlider from '../../components/AddsBannerSlider'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';
import HomeSliderV2 from '../../components/HomeSliderV2';
const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='w-[90%] mx-auto overflow-hidden'>
            <HomeSlider />
            {/* <section>
                <div className='flex items-center'>
                    <div className='part1'>

                        <HomeSliderV2 />
                    </div>
                </div>
            </section> */}
            <HomeCategorySlider />
            <section>
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <div className='leftSec'>
                            <h2 className='text-[22px] font-[600]'>Popular Products</h2>
                            <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
                        </div>
                        <div className='rightSec w-[60%]'>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Fashion" />
                                <Tab label="Electronics" />
                                <Tab label="Bags" />
                                <Tab label="Footwear" />
                                <Tab label="Groceries" />
                                <Tab label="Beauty" />
                                <Tab label="Wellness" />
                                <Tab label="Jewellery" />
                            </Tabs>

                        </div>
                    </div>
                    <ProductsSlider items="5" />
                </div>
            </section>

            <section>
                <div>
                    <div className='py-5'>
                        <h2 className='text-[22px] font-[600]'>Latest Products</h2>
                        <div className=''>
                            <ProductsSlider items="5" />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home