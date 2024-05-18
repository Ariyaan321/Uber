import React from 'react'
import Image from 'next/image'
import First from './images/first.webp'
import Second from './images/second.webp'
import Third from './images/third.webp'
import Fourth from './images/fourth.webp'
import Fifth from './images/fifth.webp'
import GeneralBlock from './generalBlock'

const homepage = () => {

    return (
        <>
            <div>
                {/* Navbar will come here */}

                {/* first block : "Go anywhere with Uber" */}
                <div className='w-full h-[680px] bg-black px-[64px] py-[64px] content-center flex justify-center'>
                    <div className='flex items-center justify-between w-[1140px] h-[555px]'>
                        <div className='w-[454px] h-[383px]'> {/* Left side */}
                            <div className='h-[191px]'> {/* Upper part aka 1st half */}
                                <div className='h-[191px] flex flex-col justify-center'>
                                    <h1 className='text-[52px] font-bold leading-tight text-white'>Go anywhere with Uber</h1>
                                    <p className='content-end text-[16px] text-white font-normal'>Request a ride, hop in, and go.</p>
                                </div>
                            </div>
                            <div className='h-[191px] mt-2'>  {/* Down Part aka 2nd half */}

                                <div className='w-[396px] h-[47px] bg-white rounded-lg flex'> {/* Enter location : hold 3 elems -> 1svg , 1i/p , 1svg */}
                                    <div className='ml-3'>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-baseweb="icon"><title>search</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="currentColor"></path></svg>
                                    </div>

                                    <div className='ml-1.2 w-full'>
                                        <input className='w-full text-[17px]' type="text" placeholder='Enter location' />
                                    </div>

                                    <div className='ml-auto mr-3'>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" role="button"><title>Navigate right up</title><path d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z" fill="currentColor"></path></svg>
                                    </div>
                                </div>

                                <div className='absolute bg-white h-[20px] w-[1px] ml-6 ' />

                                {/*2nd input */}
                                <div className='w-[396px] h-[47px] mt-[12px] bg-white rounded-lg flex'> {/* Enter destination : hold 2 elems -> 1svg , 1 i/p*/}
                                    <div className='ml-3'>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-baseweb="icon"><title>search</title><path fill-rule="evenodd" clip-rule="evenodd" d="M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z" fill="currentColor"></path></svg>
                                    </div>

                                    <div className='ml-1.2 w-full'>
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
                        <div>
                            <Image
                                src={First}
                                width={552}
                                height={552}
                                alt="First picture"
                            />
                        </div>

                    </div>
                </div>


                {/* Second Block */}
                <GeneralBlock
                    heading={"Drive when you want, make what you need"}
                    paras={"Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."}
                    linkBar={"Already have an account? Sign in"}
                    picture={Second}
                    TrowRev={true}
                    Tfstc={'text-[52px] text-black'}
                    Theight={'h-[383px]'}
                    Tmt={'mt-8'}
                    TupperHalf={''}
                    button={"Get started"}
                    TspecialCaseWMB={'w-[135px] mt-[0px]'}
                />


                {/* Third Block */}
                <GeneralBlock
                    heading={"The Uber you know, reimagined for business"}
                    paras={"Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."}
                    linkBar={"Check out our solutions"}
                    picture={Third}
                    TrowRev={false}
                    Tfstc={'text-[52px] text-GG'}
                    Theight={'h-[390px] mb-[-13px]'}
                    Tmt={'text-GG pt-3 mt-7'}
                    TupperHalf={'pt-1 mb-3'}
                    button={"Get started"}
                    TspecialCaseWMB={'w-[135px]'}
                />


                {/*Fourth block*/}
                <GeneralBlock
                    heading={"Make money by renting out your car"}
                    paras={"Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools."}
                    linkBar={''}
                    picture={Fourth}
                    TrowRev={true}
                    Tfstc={'text-[36px] text-black'}
                    Theight={'h-[240px]'}
                    Tmt={''}
                    TupperHalf={'flex flex-col pb-6'}
                    button={"Get started"}
                    TspecialCaseWMB={'w-[135px]'}
                />

                {/* Fifth Block */}
                <GeneralBlock
                    heading={"Check out what's new at Uber"}
                    paras={"The products and features announced at Go-Get 2024 are designed to help you connect with others and save a little money along the way. Discover how we’re making every journey an opportunity for interaction—because life is better together."}
                    linkBar={''}
                    picture={Fifth}
                    TrowRev={false}
                    Tfstc={'text-[52px] text-black'}
                    Theight={'h-[383px]'}
                    Tmt={'mt-8'}
                    TupperHalf={'flex flex-col'}
                    button={"Watch the event"}
                    TspecialCaseWMB={'w-[173px] mb-[-10px]'}
                />


            </div>
        </>
    )
}

export default homepage