import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
function Profile() {
    return (
        <div className="">

            <div className="mt-12  min-h-[355px] w-[850px] shadow-lg p-6">
                {/* Header Section */}
                <div className="flex items-center mb-3 space-x-5">
                    <h1 className="font-bold w-[75px] font-gotham text-lg">Project</h1>
                    <p className=' text-[#747474] ' >3 of 12</p>
                </div>

                {/* Images and Text Section */}
                <div className=" justify-between grid grid-cols-3 p-4">
                    {/* Image and Text 1 */}
                    <div className="flex flex-col">
                        <img
                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                            alt="1"
                            className="w-[250px] h-[160px] object-cover rounded-md"
                        />
                        <div className="mt-2 flex flex-col">
                            <span className='font-arial'>Project Name</span>
                            <span className='text-[#5A5A5A] text-[10px] '>Fashion design, 15.07.2019</span>
                        </div>
                    </div>
                    {/* Image and Text 2 */}
                    <div className="flex flex-col ">
                        <img
                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                            alt="2"
                            className="w-[250px] h-[160px] object-cover rounded-md"
                        />
                        <div className="mt-2  flex flex-col ">
                            <span className='font-arial'>Project Name</span>
                            <span className='text-[#5A5A5A] text-[10px] '>Fashion design, 15.07.2019</span>
                        </div>
                    </div>
                    {/* Image and Text 3 */}
                    <div className="flex flex-col">
                        <img
                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                            alt="3"
                            className="w-[250px] h-[160px] object-cover rounded-md"
                        />
                        <div className="mt-2 flex flex-col">
                            <span className='font-arial'>Project Name</span>
                            <span className='text-[#5A5A5A] text-[10px] '>Fashion design, 15.07.2019</span>
                        </div>
                    </div>
                </div>

                {/* See More Section */}
                <div className="text-left pl-4">
                    <span className='text-[#A45286] hover:text-white cursor-pointer rounded-md hover:bg-[#A45286]  text-[12px] '>SEE ALL <span className='text-[#A45286] rounded-md hover:bg-[#A45286]  text-[12px] '>(20)</span></span>
                </div>
            </div>


            <div className="w-[850px] mt-8 shadow-lg min-h-[228px] p-4">
                {/* Project Title Section */}
                <div className="flex space-x-5 mt-3">
                    <h1 className="font-bold font-gotham text-lg ">Skills & Endoresments</h1>
                </div>

                {/* Flex container for child divs */}
                <div className="grid grid-cols-3 justify-between space-x-4 px-4 mt-8">
                    {/* First Box */}
                    <div className="w-[250px] h-[80px] bg-gray-200 px-2 rounded-lg flex justify-between items-center">
                        {/* Left: Title and Avatars */}
                        <div>
                            <div className="font-semibold -mt-3 ">Fashion Designers</div>
                            <div className="flex items-center mt-2">
                                {/* Placeholder for 5 circular avatars */}
                                <div className="flex space-x-[-10px]">
                                    {[...Array(5)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"
                                        ></div>
                                    ))}
                                </div>
                                {/* Plus badge */}
                                <div className="w-6 h-6 bg-[#A45286] text-white text-xs flex items-center justify-center rounded-full -ml-3 ">
                                    +1
                                </div>
                            </div>
                        </div>

                        {/* Right: Number */}
                        <div className="text-[#a64394] -mt-10 pr-2 font-semibold">
                            6
                        </div>
                    </div>


                    {/* Second Box */}
                    <div className="w-[250px] h-[80px] bg-gray-200 px-2 rounded-lg flex justify-between items-center">
                        {/* Left: Title and Avatars */}
                        <div>
                            <div className="font-semibold -mt-3 ">Fashion Designers</div>
                            <div className="flex items-center mt-2">
                                {/* Placeholder for 5 circular avatars */}
                                <div className="flex space-x-[-10px]">
                                    {[...Array(5)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"
                                        ></div>
                                    ))}
                                </div>
                                {/* Plus badge */}
                                <div className="w-6 h-6 bg-[#A45286] text-white text-xs flex items-center justify-center rounded-full -ml-3 ">
                                    +1
                                </div>
                            </div>
                        </div>

                        {/* Right: Number */}
                        <div className="text-[#a64394] -mt-10 pr-2 font-semibold">
                            6
                        </div>
                    </div>

                    {/* Third Box */}
                    <div className="w-[250px] h-[80px] bg-gray-200 px-2 rounded-lg flex justify-between items-center">
                        {/* Left: Title and Avatars */}
                        <div>
                            <div className="font-semibold -mt-3 ">Fashion Designers</div>
                            <div className="flex items-center mt-2">
                                {/* Placeholder for 5 circular avatars */}
                                <div className="flex space-x-[-10px]">
                                    {[...Array(5)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"
                                        ></div>
                                    ))}
                                </div>
                                {/* Plus badge */}
                                <div className="w-6 h-6 bg-[#A45286] text-white text-xs flex items-center justify-center rounded-full -ml-3 ">
                                    +1
                                </div>
                            </div>
                        </div>

                        {/* Right: Number */}
                        <div className="text-[#a64394] -mt-10 pr-2 font-semibold">
                            6
                        </div>
                    </div>
                </div>

                {/* See More Section */}
                <p className="mt-4 cursor-pointer text-sm text-left pr-4">See more <span>(107)</span></p>
            </div>


            <div className="w-[850px] min-h-[345px] shadow-lg p-4 mt-8">
                {/* Header Section */}
                <div className="flex p-2 space-x-5">
                    <h1 className="font-bold text-lg">Experience</h1>
                </div>

                {/* Content Wrapper */}
                <div className="space-y-3">
                    {/* First Item */}
                    <div className="w-[790px] h-[131px]">
                        <div className="flex space-x-3 items-center px-2 rounded-lg">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="Fashion Designer"
                                    className="w-[54px] h-[54px] object-cover rounded-full"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 mr-4">
                                <h1 className="text-sm font-bold mb-1">Fashion Designer</h1>
                                <div className=" space-y-0 mb-1">
                                    <div className=" flex space-x-4">
                                        <span className="text-[10px]">Self Employed</span>
                                        <span className="text-[10px]">Around the world</span>
                                    </div>
                                    <div className="">
                                        <span className="text-[10px]">Jun 2016 — Present</span>
                                        <span className="text-[10px]">3 yrs 3 mos</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias dolorem excepturi qui maxime modi fugit vitae officiis.
                                </p>
                            </div>
                        </div>
                        <hr className="border-t-2 border-gray-300 my-1" />
                    </div>

                    {/* Second Item */}
                    <div className="w-[790px] h-[131px]">
                        <div className="flex space-x-3 items-center px-2 rounded-lg">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="Fashion Designer"
                                    className="w-[54px] h-[54px] object-cover rounded-full"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 mr-4">
                                <h1 className="text-sm font-bold mb-1">Fashion Designer</h1>
                                <div className=" space-y-0 mb-1">
                                    <div className=" flex space-x-4">
                                        <span className="text-[10px]">Self Employed</span>
                                        <span className="text-[10px]">Around the world</span>
                                    </div>
                                    <div className="">
                                        <span className="text-[10px]">Jun 2016 — Present</span>
                                        <span className="text-[10px]">3 yrs 3 mos</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias dolorem excepturi qui maxime modi fugit vitae officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[850px] h-[195px] shadow-lg mt-8 p-4">
                <div className="flex p-2 space-x-5">
                    <h1 className="font-bold">Education</h1>
                </div>

                {/* Content Wrapper */}
                <div className='w-full h-full'>
                    <div className="w-[790px] h-[131px]">
                        <div className="flex space-x-3 items-center px-2 rounded-lg">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    alt="Fashion Designer"
                                    className="w-[54px] h-[54px] object-cover rounded-full"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 mr-4">
                                <h1 className="text-sm font-bold mb-1">Fashion Designer</h1>
                                <div className=" space-y-0 mb-1">
                                    <div className=" flex space-x-4">
                                        <span className="text-[10px]">Self Employed</span>
                                        <span className="text-[10px]">Around the world</span>
                                    </div>
                                    <div className="">
                                        <span className="text-[10px]">Jun 2016 — Present</span>
                                        <span className="text-[10px]">3 yrs 3 mos</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias dolorem excepturi qui maxime modi fugit vitae officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
