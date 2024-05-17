import React from 'react'
import Image from 'next/image'
import First from './images/first.webp'

const secondBlock = () => {
    return (
        <>

            {/* Second block */}
            <div className='w-full h-[680px] bg-white border-solid border-2 border-red-500 px-[64px] py-[64px] content-center flex justify-center'>
                <div className='border-solid border-2  flex items-center border-sky-500 justify-between w-[1140px] h-[555px]'>
                    <div className='w-[454px] h-[383px] border-solid border-2 border-green-600'> {/* Left side */}
                        <div className='h-[191px] border-solid border-1 border-yellow-300'> {/* Upper part aka 1st half */}
                            <div className='h-[191px] border-solid border-2 border-yellow-300 flex flex-col justify-center'>
                                <h1 className='text-[52px] font-bold leading-tight text-white'>Go anywhere with Uber</h1>
                                <p className='content-end text-[16px] text-white font-normal'>Request a ride, hop in, and go.</p>
                            </div>
                        </div>
                        <div className='h-[191px] border-solid border-2 border-red-400 mt-2'>  {/* Down Part aka 2nd half */}

                            <div className='w-[396px] h-[47px] bg-white rounded-lg flex border-solid border-4 border-red-600'> {/* Enter location : hold 3 elems -> 1svg , 1 i/p , 1svg */}
                                <div className='ml-3'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-baseweb="icon"><title>search</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="currentColor"></path></svg>
                                </div>

                                <div className='ml-1.2 border-solid border-4 border-yellow-600 w-full'>
                                    <input className='w-full text-[17px]' type="text" placeholder='Enter location' />
                                </div>

                                <div className='ml-auto mr-3'>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" role="button"><title>Navigate right up</title><path d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z" fill="currentColor"></path></svg>
                                </div>
                            </div>

                            <div className='absolute bg-white h-[20px] w-[1px] ml-6 ' />

                            {/*2nd input */}
                            <div className='w-[396px] h-[47px] mt-[12px] bg-white rounded-lg flex border-solid border-4 border-red-600'> {/* Enter destination : hold 2 elems -> 1svg , 1 i/p*/}
                                <div className='ml-3'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-baseweb="icon"><title>search</title><path fill-rule="evenodd" clip-rule="evenodd" d="M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z" fill="currentColor"></path></svg>
                                </div>

                                <div className='ml-1.2 border-solid border-4 border-yellow-600 w-full'>
                                    <input className='w-full text-[17px]' type="text" placeholder='Enter destination' />
                                </div>
                            </div>

                            {/*Button ( Link! <a />)- see prices */}
                            <div className='w-[127px] h-[48px] mt-[16px] rounded-lg bg-white flex justify-center'>
                                <a href="/" className='text-black  text-[16px] font-medium content-center'>See prices</a>
                            </div>

                        </div>
                    </div>

                    {/* Right Side : Image */}
                    <div className=''>
                        <Image
                            src={First}
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