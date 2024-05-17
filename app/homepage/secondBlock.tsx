import React from 'react'
import Image from 'next/image'
import Second from './images/second.webp'

const secondBlock = () => {
    return (
        <>

            {/* Second block */}
            <div className='w-full h-[680px] bg-white border-solid border-2 border-red-900 px-[64px] py-[64px] content-center flex justify-center'>
                <div className='border-solid border-2  flex flex-row-reverse items-center border-sky-500 justify-between w-[1140px] h-[555px]'>
                    <div className='w-[454px] h-[383px] border-solid border-2 border-green-600 flex-col flex justify-between'> {/* right side */}
                        <div className='border-solid border-1 border-yellow-300'> {/* Upper part aka 1st half */}
                            <div className='h-[191px] border-solid border-2 border-yellow-300'>
                                <h1 className='text-[52px] font-bold leading-tight text-black border-solid border-4 border-red-900'>Drive when you want, make what you need</h1>
                                <p className='h-max text-[16px] text-black font-normal leading-6 mt-6 border-solid border-4 border-green-900'>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
                            </div>
                        </div> {/* 1st upper half end */}

                        {/* 2nd half : button and Sign in */}
                        <div className='flex gap-x-7 border-solid border-2 border-red-900 h-fit items-center'>
                            <div className='w-[135px] h-[48px] bg-black rounded-md flex justify-center items-center hover:bg-gray-900 duration-200'>
                                <a href="/" className='text-white h-fit border-solid border-2 border-red-900'>Get started</a>
                            </div>

                            <div className='items-end h-fit'>
                                <span className='text-black'>
                                    Already have an account? Sign in
                                    {/* <div className='w-30 h-7 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100'></div> */}
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