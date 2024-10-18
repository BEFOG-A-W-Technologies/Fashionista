'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Profile from '../components/Profile/index'
import Activities from '../components/Profile/Acrivities'
import Interests from '../components/Profile/Intrest'
function Page() {
    const [activeSection, setActiveSection] = useState('profile');

    return (
        <div className="h-auto w-full p-4">
            {/* Main content area */}
            <div className="flex space-y-4 gap-8 ml-[9.5rem] mt-[3rem]">
                {/* Top section with image and info */}
                <div className="flex flex-col">
                    {/* Left side with images and details */}
                    <div className="w-[850px] h-[360px] shadow-lg bg-white rounded-lg">
                        {/* First image */}
                        <div className="w-[850px] h-[180px] relative">
                            <div className="h-[180px] bg-gray-200">
                                <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" className="w-[850px] h-[180px]" alt="" />
                            </div>

                            {/* Left icon (Upload Icon) */}
                            <div className="absolute left-4 top-[20%] transform -translate-y-1/2">
                                <button className="p-2 bg-white w-[36px] h-[36px] rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 items-center  justify-center " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 7l-4-4m0 0L8 7m4-4v12" />
                                    </svg>
                                </button>
                            </div>


                            <div className="absolute right-4 top-4 flex space-x-4">
                                {/* Edit Profile Button */}
                                <button className="p-2 bg-white rounded-md shadow-md flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    <span className="text-gray-600 text-xs">Edit Profile</span>
                                </button>

                                {/* More Options Button */}
                                <button className="p-2 bg-white rounded-md shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m0 4v1m0 4v1m0 4v1" />
                                    </svg>
                                </button>
                            </div>

                        </div>


                        {/* Second image with text */}
                        <div className="flex items-start space-x-8 -mt-8"> {/* Added -mt-8 to move up by 2 rem */}
                            {/* Second image */}
                            <div className="h-[170px] w-[170px] bg-gray-200 ml-4 rounded-full z-50">
                                <img src="https://as2.ftcdn.net/v2/jpg/09/37/12/73/1000_F_937127370_RzigoTq55hhV6TOcnRXbZ2kBjSOgWUMJ.jpg" alt="" className='w-[170px] h-[170px] rounded-full' />
                            </div>

                            {/* Text details */}
                            <div className='mt-10'>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-lg font-bold">Befog</h1>
                                        <p className="text-gray-600 text-sm h-auto w-full mt-2">Description goes here. Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>

                                    {/* Location */}
                                    <div className="text-gray-600 text-xs -mt-10 w-auto">
                                        <p>Location: Your Location Here</p> {/* Replace with actual location */}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-4 space-x-4">
                                    <button className="w-[170px] h-[32px] bg-gradient-to-b from-[#FFA1AF] to-[#A45286] hover:bg-[#A45286] text-white rounded-[4px]">
                                        Contact Info
                                    </button>

                                    <button className="w-[170px] h-[32px] bg-[#FFFF] text-[#A45286] hover:bg-gradient-to-r hover:from-[#FFA1AF] hover:to-[#A45286] hover:text-white rounded-[4px] border-[2px] border-[#A45286]">
                                        1,043 connections
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 w-[850px] h-[64px] shadow-lg grid grid-cols-3 items-center border-b">
                        {/* Profile Button */}
                        <button
                            onClick={() => setActiveSection('profile')}
                            className={`w-full text-black h-full font-gotham text-[12px] font-bold hover:bg-[#A45286] hover:text-white ${activeSection === 'profile' ? 'bg-[#A45286] text-white' : 'bg-white'} border-r-2 border-gray-300`}
                        >
                            Profile
                        </button>

                        {/* Activities & Interests Button */}
                        <button
                            onClick={() => setActiveSection('activities')}
                            className={`w-full font-gotham font-bold text-[12px] h-full border-r-2 border-gray-300 ${activeSection === 'activities' ? 'bg-[#A45286] text-white' : 'bg-white'}`}
                        >
                            Activity & Interests
                        </button>

                        {/* Articles Button */}
                        <button
                            onClick={() => setActiveSection('articles')}
                            className={`w-full font-gotham text-[12px] font-bold h-full ${activeSection === 'articles' ? 'bg-[#A45286] text-white' : 'bg-white'}`}
                        >
                            Articles (3)
                        </button>
                    </div>


                    {/* Profile Section */}
                    {activeSection === 'profile' && (
                        <div>
                            <Profile />
                        </div>
                    )}

                    {/* Activities and Interests Section */}
                    {activeSection === 'activities' && (
                        <div className="">
                            <Activities />
                        </div>
                    )}

                    {/* Articles Section */}
                    {activeSection === 'articles' && (
                        <div>
                            <Interests />
                        </div>
                    )}




                </div>

                {/* Other content area Right side */}
                <div className="h-[1165px] p-1 w-[290px]">
                    <div className="">
                        <div className="h-[360px] shadow-lg">
                            <div className="space-x-20 w-[230px] pt-3 mx-auto">
                                <span className="font-semibold text-xs ">Your Dashboard</span>
                                <span className=" text-right text-xs text-[#A45286] rounded-md hover:bg-[#A45286]  font-semibold ">Go To stats</span>
                            </div>
                            <hr className="w-[230px] mx-auto mt-2" />
                            <div className="flex flex-col m-4 mt-4">
                                <div className="flex flex-col w-[83px] h-[71px] mb-6">
                                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  font-arial font-bold text-[45px] leading-[51.75px] text-left">896</span>
                                    <span className="text-[14px] text-gray-700">views today</span>
                                </div>

                                <div className="flex flex-col w-[83px] h-[71px] mb-6">
                                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  font-arial font-bold text-[45px] leading-[51.75px] text-left">896</span>
                                    <span className="text-[14px] text-gray-700">views today</span>
                                </div>
                                <div className="flex flex-col w-[183px] h-[71px] mb-6">
                                    <span className="text-[#A45286] rounded-md hover:bg-[#A45286]  font-arial font-bold text-[45px] leading-[51.75px] text-left">896</span>
                                    <span className="text-[14px] text-gray-700">search appereances</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[427px] mt-5 shadow-lg ">
                            <div className="space-x-28 w-[230px] font-gotham mx-auto py-2">
                                <span className="font-semibold text-xs ">VISITORS</span>
                                <span className=" text-right text-xs text-[#A45286] rounded-md hover:bg-[#A45286]  font-semibold ">VIEW ALL</span>
                            </div>
                            <hr className="w-[230px] mx-auto " />
                            <div className="flex flex-col items-start m-4 space-y-3"> {/* Added spacing between items */}
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[52px] h-[52px] rounded-full mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="h-[338px] mt-5 shadow-lg ">
                            <div className="flex items-center px-3 py-2">
                                <span className="font-gotham text-xs font-semibold text-center ml-2 ">YOU MAY LIKE THESE COURCES</span>
                            </div>
                            <hr className="w-[230px] mx-auto" />
                            <div className="flex flex-col items-start m-4 w-[228px] h-[198px] justify-center text-center space-y-3"> {/* Added spacing between items */}
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[80px] h-[52px] mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg"
                                        alt=""
                                        className="w-[80px] h-[52px]  mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                    <span className='text-[14px]'>text</span>
                                    <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[216px] h-[52px]">
                                    <img src="https://fileinfo.com/img/ss/xl/jpg-large_12492-2.jpg" alt=""
                                        className="w-[80px] h-[52px] mr-2" /> {/* Add size to the image and margin */}
                                    <div className="flex flex-col">
                                        <span className='text-[14px]'>text</span>
                                        <p className="text-gray-700 text-[10px] ">text</p>
                                    </div>
                                </div>
                            </div>
                            <p className="ml-3 text-[#A45286]">See all recomendations</p>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
}

export default Page;
