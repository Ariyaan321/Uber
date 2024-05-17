import React from 'react'
import Image from 'next/image'
import Second from './images/second.webp'

const secondBlock = () => {
    return (
        <>

            {/* Second block */}
            <div className='w-full h-[680px] bg-white border-solid border-2 border-purple-900 px-[64px] py-[64px] content-center flex justify-center'>
                <div className='flex flex-row-reverse items-center justify-between w-[1140px] h-[555px]'>
                    <div className='w-[454px] h-[383px] flex-col flex justify-between'> {/* right side */}
                        <div className='border-solid border-3 border-yellow-300'> {/* Upper part aka 1st half */}
                            <div className='h-[191px]'>
                                <h1 className='text-[52px] font-bold leading-tight text-black'>Drive when you want, make what you need</h1>
                                <p className='h-max text-[16px] text-black font-normal leading-6 mt-8'>Make money on your schedule with deliveries or rides—or<br /> both. You can use your own car or choose a rental <br /> through Uber.</p>
                            </div>
                        </div> {/* 1st upper half end */}

                        {/* 2nd half : button and Sign in */}
                        <div className='flex gap-x-7 h-fit items-center'>
                            <div className='w-[135px] h-[48px] bg-black rounded-md flex justify-center items-center hover:bg-GG duration-200'>
                                <a href="/" className='text-white h-fit'>Get started</a>
                            </div>

                            <div className='items-end h-fit'>
                                <span className='text-black cursor-pointer'>
                                    Already have an account? Sign in
                                    <div className='w-30 h-1 bg-gray-200 rounded-3xl'></div>
                                    <div className='w-30 h-1 rounded-3xl hover:{before:bg-grey-200 after:bg-black}'></div>

                                </span>
                            </div>
                        </div> {/*2nd half end*/}


                    </div>

                    {/* Right Side : Image */}
                    <div className=''>
                        <Image
                            src={Second}
                            width={552}
                            height={552}
                            alt="Picture of the author"
                        />
                    </div>

                </div>
            </div>


        </>
    )
}




export default secondBlock;