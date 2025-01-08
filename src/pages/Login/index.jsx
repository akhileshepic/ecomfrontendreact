import { Button } from '@mui/material'
import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import LoadingButton from '@mui/lab/LoadingButton';
const Login = () => {
    const [isPassword, setIsPassword] = useState(false)
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    function handleClickGoogle() {
        setLoadingGoogle(true);
    }
    return (
        <div className='flex justify-center items-center  bg-gray-200'>
            <div className='w-[400px] shadow-md  p-4 my-6 rounded-md bg-white'>

                <h1 className='text-[20px] font-bold'>Sign In</h1>
                <form>
                    <div className='grid grid-cols-1 mb-5 mt-5'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Email</h3>
                            <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mb-3 mt-3'>
                        <div className='col '>
                            <h3 className='text-[14px] font-[500] mb-1'>Password</h3>
                            <div className='relative'>
                                <input type={`${isPassword === false ? 'password' : 'text'}`} className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                                <Button className='!absolute !min-w-[10px] !bg-transparent !text-[rgba(0,0,0,0.8)] !top-[7px] right-0' onClick={() => setIsPassword(!isPassword)}>
                                    {isPassword === true ?
                                        <IoEye className='text-[15px]' /> :
                                        <IoEyeOff className='text-[15px]' />
                                    }
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-between'>
                        <Button className='!min-w-[200px] !bg-blue-600 !text-white !h-[40px]'>Sign In</Button>
                        <Button className='!min-w-[150px] !border-2 !border-blue-600  !h-[40px] signupborder'>Sign Up</Button>
                    </div>
                    <div className='flex mt-6 mb-6 items-center'>
                        <span className='text-[15px]'>Not Registered? </span>
                        <Link to="/signup">
                            <Button className='!capitalize'>Sign Up</Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className='text-[18px] font-bold'>Or continue with social account</span>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <LoadingButton
                            size="small"
                            onClick={handleClickGoogle}
                            endIcon={<FcGoogle />}
                            loading={loadingGoogle}
                            loadingPosition="end"
                            variant="outlined"
                            className='!bg-none !text[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
                        >
                            Signin With Google
                        </LoadingButton>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login