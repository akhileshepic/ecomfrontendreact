import { Box, Drawer } from '@mui/material';
import React, { useContext } from 'react'
import CartPanel from '../CartPanel';
import { MyContext } from '../../App';
const Footer = () => {
    const context = useContext(MyContext)
    return (
        <>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Section 1: About Us */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">About Us</h3>
                            <p className="text-sm">
                                We are a team of passionate developers creating amazing
                                experiences for our users.
                            </p>
                        </div>

                        {/* Section 2: Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Section 3: Contact */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact</h3>
                            <p className="text-sm">Email: support@example.com</p>
                            <p className="text-sm">Phone: +123 456 7890</p>
                        </div>

                        {/* Section 4: Social Media */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="hover:text-gray-400"
                                    aria-label="Facebook"
                                >
                                    Facebook
                                </a>
                                <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                                    Twitter
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-gray-400"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8 text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Your Company Name. All rights
                        reserved.
                    </div>
                </div>
            </footer>


            <div>
                <Drawer anchor={'right'} open={context.openCartPanel} onClose={() => context.setOpenCartPanel(false)}>
                    <Box sx={{ width: 400 }} role="presentation">
                        <CartPanel />
                    </Box>
                </Drawer>
            </div>
        </>
    );
}

export default Footer