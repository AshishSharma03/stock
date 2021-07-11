import React from "react";
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import {StarIcon} from '@heroicons/react/solid'
import {TrashIcon}from '@heroicons/react/outline'
import {PlusIcon}from '@heroicons/react/outline'
import {useDispatch} from "react-redux"
import {addToBasket,removeFromBasket} from '../slices/basketSlice'

function CheckoutProduct({
    id,
    title,
    prices,
    rating,
    description,
    category,
    image,
    hasPrime}) {
   
    const dispatch = useDispatch()

    const addItemToBasket =()=>{
        const product ={
            id,
            title,
            prices,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

    
        //push item into redux
        dispatch(addToBasket(product));
    };


    const removeItemFromBasket =()=>{
        // Remove Item from Redux
        dispatch(removeFromBasket({id}))
    }




    return (
        <div className='grid grid-cols-5'>
            <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain"
            />

            <div className='col-span-3 mx-5 '>
                <p className="font-semibold">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) =>(
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>
                <p className="text-xs my-4 line-clamp-3 text-gray-600 ">{description}</p>
                      <p className="font-semibold">  <Currency  quantity={prices} currency="INR"/></p>

                    {hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img
                            loading="lazy"
                            className="w-12"
                            src="https://pngimage.net/wp-content/uploads/2018/06/prime-png.png"
                            alt=""
                           / >
                             <p className="text-xs font-bold text-gray-300">FREE Delivery by MYSTOCK</p>
                        </div>
                    )}
                        </div> 
                        <div className="flex flex-col space-y-2 my-auto justify-self-end">
                            <button className="button" onClick={addItemToBasket}><PlusIcon className="h-5 text-black" /></button>
                            <button className="button" onClick={removeItemFromBasket}><TrashIcon className="h-5 text-black" /></button>
                        </div>              
        </div>
    )
}

export default CheckoutProduct;
