import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { createContext } from 'react';

const MySwiper = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            className="w-full  h-[550px]"
        >
            <SwiperSlide className="relative max-w-full">
                <img src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-1_2048x.jpg?v=1703653285" alt="Slide 1" className="w-full h-full object-cover" />
                <div className="absolute top-1/3 left-10 flex flex-col gap-5">
                    <h1 className="text-3xl text-[#222222] ">IMMERSE YOURSELF IN OUR <br /> </h1> <h1 className='text-3xl'>SPECTACULAR FURNITURE COLLECTION </h1>  
                    <p className="text-xl mt-2 text-[#555555]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="mt-4 w-[150px] py-[12px] bg-[#0a5d5d] border-[#0a5d5d]  border-2 text-[#fff] font-medium transition">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative max-w-full">
                <img src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-2_2048x.jpg?v=1703750459" alt="Slide 2" className="w-full h-full object-cover" />
                <div className="absolute top-1/3 left-10 flex flex-col gap-5">
                    <h1 className="text-3xl text-[#222222] ">DISCOVER EXCEPTIONAL FURNITURE <br /></h1> <h1 className='text-3xl'>DESIGNS FOR EVERY STYLE</h1>
                    <p className="text-xl mt-2 text-[#555555]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="mt-4 w-[150px] py-[12px] bg-[#0a5d5d]  border-[#0a5d5d] border-2 text-[#fff] font-medium transition">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative max-w-full">
                <img src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-3_2048x.jpg?v=1703750458" alt="Slide 1" className="w-full h-full object-cover" />
                <div className="absolute top-1/3 left-10 flex flex-col gap-5">
                    <h1 className="text-3xl">ENHANCE YOUR SPACE <br /></h1> <h1 className='text-3xl'>WITH STYLE AND FUNCTION</h1>
                    <p className="text-2xl mt-2 text-[#555555]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="mt-4 w-[150px] py-[12px] bg-[#0a5d5d]  border-[#0a5d5d] border-2 text-[#fff] font-medium transition">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default MySwiper;