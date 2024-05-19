import React from 'react'

const navbar = () => {
    return (
        <>
            <nav className='w-full h-[64px] pt-[12px] pb-[12px] text-white bg-black'>
                <div className='pr-[64px] pl-[114px] flex'>
                    <ul>
                        <li className='text-[24px] mt-[2px]'>
                            <a href="/" className=' pl-[5px]'>Uber</a>    {/*Uber*/}
                        </li>
                    </ul>
                    <ul className='w-full mx-[10px] flex font-medium text-[14px]'>
                        <li className='flex items-center ml-3 justify-center'><a href="/" className='flex justify-center items-center rounded-2xl w-[58px] h-[36px] hover:bg-GG duration-200'>Ride</a></li>
                        <li className='flex items-center ml-1 justify-center'><a href="/" className='flex justify-center items-center rounded-2xl w-[58px] h-[36px] hover:bg-GG duration-200'>Drive</a></li>
                        <li></li>
                    </ul>
                    <ul className='w-[270px] h-[36px] flex justify-center gap-2 pr-7 mt-[2px]'>
                        <button className={`w-[62px] font-medium text-[14px] rounded-3xl hover:bg-GG duration-200`}>
                            Log in
                        </button>
                        <button className={`w-[73px] h-full rounded-3xl px-[12px] pb-0 text-[14px] bg-white text-black font-medium cursor-pointer hover:bg-gray-300 duration-200`}>
                            Sign up
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar
