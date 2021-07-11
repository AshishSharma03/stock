import React,{useState} from 'react'
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid';
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,title,price,description,category,image}) {
    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    );

 



    var prices = price * 40;
     
    const [hasPrime] = useState(
        Math.random() < 0.5
    );

    const addItemToBasket=()=>{
                const product = {
                    id,
                    title,
                    prices,
                    rating,
                    description,
                    category,
                    image,
                    hasPrime,
                };

                //Sending the product as an action to the REDUX store... the basket slice 
                dispatch(addToBasket(product));
    }
     
  return (
    <div className="relative flex flex-col m-2 bg-white z-30 p-5 rounded-sm shadow-lg">
        <p className="absolute top-2 right-2 text-xs text-gray-200">{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>

        <h4 className="my-4  line-clamp-2 font-semibold">{title}</h4>
        <div className="flex">
            {Array(rating)
            .fill()
            .map((_, i)=>(
                <StarIcon className="h-5 text-yellow-500"/>
            ))}
       
        </div>
        <p className="text-xs my-4 line-clamp-2 text-gray-600">{description}</p>

        <div className="font-bold mb-1">
            <Currency
            quantity={prices}
            currency="INR"
            />
        </div>

        {hasPrime && (
            <div className="flex items-center space-x-2 ">
                <img className="w-12" src="https://pngimage.net/wp-content/uploads/2018/06/prime-png.png" alt="" />
                <p className="text-xs font-bold text-gray-300">FREE Delivery by Amazon</p>
            </div>
        ) }
            <button onClick={addItemToBasket} className="mt-auto button  hover:text-green-400" style={{WebkitTapHighlightColor:"#ffffff00"}}>ADD TO CART</button>
    </div>
  )
}

export default Product;
