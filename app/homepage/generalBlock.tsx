import React from 'react'
import Image from 'next/image'


// Define the prop types for the component
interface GeneralBlockProps {
    heading: string;
    paras: string;
    linkBar?: string;
    picture: any;
    TrowRev: boolean;
    Tfstc: string;
    Theight: string;
    Tmt: string;
    TupperHalf: string;
}
// const thirdBlock = (heading: string, paras: string, linkBar = '', picture: any ,) => {
const generalBlock: React.FC<GeneralBlockProps> = ({ heading, paras, linkBar = '', picture, TrowRev, Tfstc, Theight, Tmt = '', TupperHalf = '' }) => {

    return (
        <>

            {/* Second block */}
            <div className='w-full h-[680px] bg-white border-solid border-2 border-purple-900 px-[64px] py-[64px] content-center flex justify-center'>
                <div className={`flex ${TrowRev && 'flex-row-reverse'} items-center justify-between w-[1140px] h-[555px]`}>
                    <div className={`w-[454px] ${Theight} flex-col flex justify-between border-solid border-2 border-red-800`}> {/* right side */}
                        <div className='border-solid border-3 border-yellow-300'> {/* Upper part aka 1st half */}
                            <div className={`h-[191px] ${TupperHalf}`}>
                                <h1 className={`${Tfstc} font-bold leading-tight`}>{heading}</h1>   {/* fontSize and Textcolor : changes*/}
                                <p className={`h-max text-[16px] text-black font-normal leading-6 ${Tmt}`}>{paras}</p>
                            </div>
                        </div> {/* 1st upper half end */}

                        {/* 2nd half : button and Sign in */}
                        <div className='flex gap-x-7 h-fit items-center mb-7'>
                            <div className='w-[135px] h-[48px] bg-black rounded-md flex justify-center items-center hover:bg-GG duration-200'>
                                <a href="/" className='text-white h-fit font-medium'>Get started</a>
                            </div>

                            {linkBar &&
                                <div className='items-end h-fit mb-0 border-solid border-2 border-red-800'>
                                    <span className='text-black cursor-pointer'>
                                        {linkBar}
                                        <div className='w-30 h-1 bg-gray-200 rounded-3xl'></div>
                                        <div className='w-30 h-1 rounded-3xl hover:{before:bg-grey-200 after:bg-black}'></div>

                                    </span>
                                </div>
                            }

                        </div> {/*2nd half end*/}


                    </div>

                    {/* Right Side : Image */}
                    <div className=''>
                        <Image
                            src={picture}
                            width={552}
                            height={552}
                            alt="general picture"
                        />
                    </div>

                </div>
            </div>

        </>
    )


}

export default generalBlock