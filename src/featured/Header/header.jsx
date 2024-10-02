import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";




const header = () => {
    return (
        <>
            <div className='header-container flex justify-between items-center p-3 w-full '>
                <div><img src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160" alt="" /></div>
                <div>
                    <ul className='flex gap-10'>
                        <a className='text-[#0a5d5d] font-bold' href="">HOME</a>
                        <a href="">COLLECTION</a>
                        <a href="">PRODUCTS</a>
                        <a href="">OTHER</a>
                        <a href="">BLOG</a>
                    </ul>
                </div>

                <div className='icons flex gap-6 text-2xl'>
                    <IoSearchOutline />
                    <MdOutlineAccountCircle />
                    <MdOutlineLocalGroceryStore />
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H21M1 8H21M1 15H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>

        </>
    )
}

export default header
