import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import  banner from '../assets/banner5.svg'
import {ShoppingBagIcon} from '@heroicons/react/outline'
import {ArrowCircleDownIcon} from '@heroicons/react/solid'
import banner from '../styles/banner.svg'


function Banner() {
    return (
        <div className='bg-gradient-to-t from-blue-300  via-green-400 to-green-500 ' style={{maxHeight:"820px",height:"820px"}}>
             <div className="grid md:grid-cols-2  w-full ">
             <div className="pt-10 md:pt-40 md:ml-16
             items-center text-center md:text-left
             font-extraboldtext-white">
               <a className="text-5xl  md:text-7xl text-yellow-300 font-extrabold drop-shadow-xl">Hurry Up!</a>
               <br />
               <a className="text-7xl md:text-9xl font-extrabold  text-green-100 
                drop-shadow-2xl ">20% OFF </a>
                <br />
                <a className="md:text-4xl text-xl font-bold drop-shadow-sm text-white">ON YOUR SELECT <a className="font-extrabold text-5xl rounded-lg ">PRODUCTS</a> 
                </a>
                <br />
               
                 <button className="mt-16 inline-flex items-center bg-green-200 p-3 rounded-full shadow-xl hover:border-4 hover:bg-transparent  text-green-500 hover:text-white"> <span className=" font-bold text-3xl ml-2">SCROLL DOWN</span> <ArrowCircleDownIcon className="h-10  ml-4 "/></button>           
                </div>
            <div className="pt-20 ">
            <img
                src={banner}
                width={800}
                height={700}
                objectFit="contain"
                className="mx-auto"
                style={{caretColor: "transparent"}}/>
            </div>
        </div>
        </div>
    )
}

export default Banner;
