'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';


function Acrivities() {
    const [activeSectionPost, setActiveSectionPost] = useState('post');
    const [activeSectionEvent, setActiveSectionEvent] = useState('event');
    // State for current page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 15;

    // Handle page navigation (arrow button click)
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle slider change
    const handleSliderChange = (e) => {
        setCurrentPage(Number(e.target.value));
    };


    return (
        <div>
            <div>
                <div className="w-[850px] h-auto mt-8 border-2 border-slate-500">
                    <div>
                        <h1 className="text-[18px] font-semibold py-3 px-4">Recent Activities</h1>
                    </div>

                    {/* Buttons for switching sub-sections */}
                    <div className="px-4 space-x-7">
                        <button
                            onClick={() => setActiveSectionPost('post')}
                            className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'post' ? 'bg-[#A45286] text-white' : ''
                                }`}
                        >
                            Post
                        </button>
                        <button
                            onClick={() => setActiveSectionPost('comment')}
                            className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'comment' ? 'bg-[#A45286] text-white' : ''
                                }`}
                        >
                            Comment
                        </button>
                        <button
                            onClick={() => setActiveSectionPost('videos')}
                            className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'videos' ? 'bg-[#A45286] text-white' : ''
                                }`}
                        >
                            Videos
                        </button>
                        <button
                            onClick={() => setActiveSectionPost('images')}
                            className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'images' ? 'bg-[#A45286] text-white' : ''
                                }`}
                        >
                            Images
                        </button>
                        <button
                            onClick={() => setActiveSectionPost('documents')}
                            className={`border-2 border-[#A45286] rounded-md px-6 text-lg ${activeSectionPost === 'documents' ? 'bg-[#A45286] text-white' : ''
                                }`}
                        >
                            Documents
                        </button>
                    </div>

                    {/* Dynamic content based on active post section */}
                    <div className="p-4">
                        {activeSectionPost === 'post' && (

                            <div className="space-y-2">

                                <div className=" bg-white  rounded-lg">
                                    <h3 className="text-[12px] p-1 font-semibold mb-2 text-gray-800">
                                        Aditya Kumar Kanaujiya posted this <span className="text-[10px] text-gray-500">1 week ago</span>
                                    </h3>
                                    <div className="flex space-x-4">
                                        <Image
                                            className="w-[99px] h-[63px] object-cover rounded-lg"
                                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                            alt="image"
                                            width={40}
                                            height={40}
                                        />
                                        <div className='p-2' >
                                            <p className="text-gray-600 text-[12px] mb-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in, iure temporibus impedit delectus sed repellendus...
                                            </p>
                                            <div className="flex items-center justify-between space-x-2 text-blue-600">
                                                <span className="text-sm">🔗</span>
                                                <span className="text-sm ml-auto cursor-pointer text-end ">See more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=" bg-white  rounded-lg">
                                    <h3 className="text-[12px] p-1 font-semibold mb-2 text-gray-800">
                                        Aditya Kumar Kanaujiya posted this <span className="text-[10px] text-gray-500">1 week ago</span>
                                    </h3>
                                    <div className="flex space-x-4">
                                        <Image
                                            className="w-[99px] h-[63px] object-cover rounded-lg"
                                            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                            alt="image"
                                            width={40}
                                            height={40}
                                        />
                                        <div className='p-2' >
                                            <p className="text-gray-600 text-[12px] mb-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in, iure temporibus impedit delectus sed repellendus...
                                            </p>
                                            <div className="flex items-center justify-between space-x-2 text-blue-600">
                                                <span className="text-sm">🔗</span>
                                                <span className="text-sm ml-auto cursor-pointer text-end ">See more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        )}
                        {activeSectionPost === 'comment' && (
                            <div>
                                <div className="">
                                    <h3 className='flex space-x-4' >
                                        <p className="text-[12px] font-semibold">
                                            Aditya Kumar commented on a post
                                        </p>
                                        <span className='text-[12px]'>2 days ago</span>
                                    </h3>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis velit...</p>
                                    <hr className="border-1 border-gray-400 rounded-full my-6" />
                                </div>
                                <div className="">
                                    <h3 className='flex space-x-4' >
                                        <p className="text-[12px] font-semibold">
                                            Aditya Kumar commented on a post
                                        </p>
                                        <span className='text-[12px]'>2 days ago</span>
                                    </h3>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis velit...</p>
                                    <hr className="border-1 border-gray-400 rounded-full my-6" />
                                </div>
                                <div className="">
                                    <h3 className='flex space-x-4' >
                                        <p className="text-[12px] font-semibold">
                                            Aditya Kumar commented on a post
                                        </p>
                                        <span className='text-[12px]'>2 days ago</span>
                                    </h3>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis velit...</p>
                                    <hr className="border-1 border-gray-400 rounded-full my-6" />
                                </div>
                                <div className="px-4  w-auto flex justify-center">
                                    <button className="text-[#A45286] px-6  text-[18px] font-semibold  ">
                                        See all post
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeSectionPost === 'videos' && (
                            <div>
                                <div className="grid grid-cols-4 gap-4">
                                    {/* Video Post */}


                                    {/* Image Posts */}
                                    {[...Array(8)].map((_, index) => (
                                        <div key={index} className="col-span-1">
                                            <div className="aspect-w-1 h-[205px] bg-gray-300 flex justify-center items-center">
                                                {/* Placeholder icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[205px] w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M10 2a2 2 0 00-2 2v16a2 2 0 002 2h4a2 2 0 002-2V4a2 2 0 00-2-2h-4zm0 2h4v16h-4V4zm-5 4v10a2 2 0 002 2h1V8H5zm11 0v10h1a2 2 0 002-2V8h-3z" />
                                                </svg>
                                            </div>
                                            <p className="text-center text-[12px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="flex justify-center items-center mt-2">
                                                <div className="bg-green-400 rounded-full w-3 h-3"></div>
                                                <span className="ml-2 text-[10px]">+15</span>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <hr className="border-1 border-gray-400 rounded-full my-6" />

                                {/* See All Posts Button */}
                                <div className="flex justify-center mt-6">
                                    <button className="text-blue-500 text-sm font-semibold hover:underline">
                                        SEE ALL POST
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeSectionPost === 'images' && (
                            <div>
                                <div className="grid grid-cols-4 gap-4">
                                    {/* Video Post */}


                                    {/* Image Posts */}
                                    {[...Array(8)].map((_, index) => (
                                        <div key={index} className="col-span-1">
                                            <div className="aspect-w-1 h-[161px] rounded-lg bg-gray-300 flex justify-center items-center">

                                            </div>

                                        </div>
                                    ))}

                                </div>
                                <hr className="border-1 border-gray-400 rounded-full my-6" />

                                {/* See All Posts Button */}
                                <div className="flex justify-center mt-6">
                                    <button className="text-blue-500 text-sm font-semibold hover:underline">
                                        SEE ALL POST
                                    </button>
                                </div>
                            </div>
                        )}
                        {activeSectionPost === 'documents' && (
                            <div className="">
                                <div className="mt-2">
                                    <div className=" rounded-lg overflow-hidden  w-[510px] h-auto mx-auto ">

                                        {/* Header with Title and Page Count */}
                                        <div className="bg-[#666666] text-white h-[41px] px-4 py-2 flex justify-between items-center">
                                            <span className="text-xs font-semibold tracking-wide">TITLE</span>
                                            <span className="text-xs tracking-wide">• {totalPages} PAGES</span>
                                        </div>

                                        {/* Document/Content Viewer */}
                                        <div className="bg-gray-50 relative h-64 flex justify-center items-center">
                                            {/* Placeholder for document content */}
                                            <div className="text-gray-400 text-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-16 w-16"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                                <p className="text-gray-500 mt-2 text-sm">Page {currentPage}</p>
                                            </div>

                                            {/* Right Navigation Arrow */}
                                            <button
                                                onClick={nextPage}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gray-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* Left Navigation Arrow */}
                                            <button
                                                onClick={prevPage}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gray-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Page Slider and Fullscreen Controls */}
                                        <div className="bg-[#666666] text-white h-[41px] px-4 py-2 flex justify-between items-center">
                                            <span className="text-xs">{currentPage}/{totalPages}</span>
                                            <input
                                                type="range"
                                                min="1"
                                                max={totalPages}
                                                value={currentPage}
                                                onChange={handleSliderChange}
                                                className="w-full mx-4 accent-[#FFA1AF]"
                                            />
                                            <button className="text-white hover:bg-gray-600 p-1 rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2m-10 0H6a2 2 0 01-2-2v-2m0-10V6m0 12v2a2 2 0 002 2h2" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Document Description */}
                                        <div className="p-4 text-center">
                                            <p className="text-[#000000] text-sm font-semibold">
                                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
                                            </p>
                                            <p className="text-gray-500 text-xs mt-1">{totalPages} Pages</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className="w-[850px] h-auto bg-white mt-12 p-6">
                    <h2 className="text-2xl font-bold mb-4">Events / Reminders</h2>

                    {/* Tabs */}
                    <div className="flex space-x-4 mb-8">
                        <button
                            className="text-white font-bold py-2 px-4 rounded"
                            onClick={() => setActiveSectionEvent('event')}

                            style={{ backgroundImage: 'linear-gradient(180deg, #FFA1AF 0%, #A45286 100%)' }}
                        >
                            EVENTS
                        </button>
                        <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
                            onClick={() => setActiveSectionEvent('reminders')}
                        >REMINDERS</button>
                    </div>
                    {activeSectionEvent === 'event' && (
                        <div className="">

                            {/* Events List */}
                            <div className="space-y-8">
                                {/* Event Card 1 */}
                                <div className="flex border border-gray-300 rounded-lg p-4 space-x-4">
                                    {/* image */}
                                    <div className="w-[250px] h-[143px] bg-gray-200 rounded-md"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[14px] font-bold">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">Mon, Dec 5, 6 : 00 PM</p>
                                        <p className="text-xs text-gray-500">By Aditya Kumar Kanaujia</p>
                                        <p className="text-xs text-gray-700 mt-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est.
                                        </p>
                                        <div className="mt-1 text-gray-500">
                                            <span className="inline-flex items-center">
                                                <span className="mr-2 text-xs ">👥</span>12,524 Applicants
                                            </span>
                                        </div>
                                    </div>
                                    {/* Icon */}
                                    <div className="flex items-start text-gray-500 text-xl">
                                        <span>•••</span>
                                    </div>
                                </div>

                                {/* Event Card 2 */}
                                <div className="flex border border-gray-300 rounded-lg p-4 space-x-4">
                                    {/* image */}
                                    <div className="w-[250px] h-[143px] bg-gray-200 rounded-md"></div>
                                    <div className="flex-1">
                                        <h3 className="text-[14px] font-bold">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">Mon, Dec 5, 6 : 00 PM</p>
                                        <p className="text-xs text-gray-500">By Aditya Kumar Kanaujia</p>
                                        <p className="text-xs text-gray-700 mt-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est.
                                        </p>
                                        <div className="mt-1 text-gray-500">
                                            <span className="inline-flex items-center">
                                                <span className="mr-2 text-xs ">👥</span>12,524 Applicants
                                            </span>
                                        </div>
                                    </div>
                                    {/* Icon */}
                                    <div className="flex items-start text-gray-500 text-xl">
                                        <span>•••</span>
                                    </div>
                                </div>
                            </div>
                            {/* See All Events Button */}
                            <div className="text-center mt-8">
                                <hr className="border-1 border-gray-400 rounded-full my-2" />
                                <button className=" font-bold text-[12px] py-2 px-6 rounded-lg">
                                    SEE ALL EVENTS
                                </button>
                            </div>
                        </div>
                    )}
                    {activeSectionEvent === 'reminders' && (
                        <div className="">

                           <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis fugiat quasi nobis, natus odio voluptatibus! Incidunt ullam, aspernatur consectetur vitae eius libero officiis rem cupiditate commodi tenetur necessitatibus tempora.
                           Expedita, aliquam obcaecati, aperiam architecto ullam optio neque doloremque explicabo quaerat modi iusto inventore quasi velit numquam magni, tenetur ducimus. Eaque enim possimus quae voluptate? Qui necessitatibus tenetur accusamus quaerat.
                           Consectetur est accusamus dolores cumque neque ex, accusantium asperiores ut dolore dignissimos, vero tempore, in voluptatem ratione. Non, quis? Amet officiis impedit quia fugiat, doloribus totam natus odio non neque.
                           Iure quas dolorem vero temporibus dolor eius officiis, unde modi non eum voluptate blanditiis inventore atque necessitatibus quibusdam architecto quia incidunt totam doloremque libero. Architecto assumenda excepturi nam et atque!
                           Quibusdam expedita eos, repellendus ut inventore assumenda itaque tenetur laudantium magnam cum voluptates, totam et exercitationem dignissimos? Veritatis, aliquid nisi ipsa deserunt eaque, assumenda, soluta earum possimus laborum illo sed!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Acrivities
