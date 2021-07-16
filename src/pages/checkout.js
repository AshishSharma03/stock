import React from 'react'
import Image from 'next/image';
import Header from '../components/Header';
import { selectItems ,selectTotal} from '../slices/basketSlice';
import {useSelector } from "react-redux"
import CheckoutProduct from '../components/CheckoutProduct';
import {  useSession } from 'next-auth/client';
import Currency from 'react-currency-formatter'
// import {LoginIcon} from '@heroicons/react/outline'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key);




function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession()

    const createCheckoutSesssion = async () => {
        const stripe = await stripePromise;

        // call the backend to create a checkout session...
     const checkoutSession = await axios.post("/api/create-checkout-session",{
         items : items,
         email: session.user.email,
     });

     // Redirect user/customer to stripe checkout
     const result = await stripe.redirectToCheckout({
         sessionId : checkoutSession.data.id,
     });

    
         if(result.error){alert(result.error.message)};
    }



    return (
        <div className='bg-gray-100 '>
           <Header CheckoutProduct={false}/>
            <br/>
            <br/>
            <br/>
        <main className="lg:flex max-w-screen-2xl mx-auto ">
            {/* LEft */}
            <div  className="flex-grow m-5  shadow-sm cursor-none ">



                <div className="flex flex-col p-5 space-y-10 h-full bg-white">
                <h1 className=" text-2xl md:text-3xl border-b pb-4 font-mono font-bold text-green-500 "> {items.length === 0 ?

                <a className="text-red-300">Your shopping cart is empty </a> : 'Your shopping cart'} </h1>

                {items.length === 0 ? <>  <img
                src="https://www.onlinetestsindia.com/assets/images/empty_cart.jpg"
                width={400}
                height={400}
                objectFit="contain"
                className="mx-auto"
                style={{caretColor: "transparent"}}
                onContextMenu="return false;"
                />
                <h1 className="mx-auto bottom-20 font-extrabold  relative text-3xl text-red-500 "    style={{caretColor: "transparent"}}>OOPS! </h1> 
                <h3 className="mx-auto relative" style={{bottom:"7rem",fontFamily:"monospace",fontWeight:"bold",fontSize:"1.2rem"}}> No Items Found.</h3>
                </> :
                    <>
                    {items.map((items, i)=>(
                        <CheckoutProduct
                            key={i}
                            id={items.id}
                            title={items.title}
                            rating ={items.rating}
                            prices={items.prices}
                            description={items.description}
                            category={items.category}
                            image={items.image}
                            hasPrime={items.hasPrime}
                        />
                    ))}
                        </>
                }
                </div>
            </div>
               
              {/* Right */}
            <div className="m-5 md:ml-1 "> 
                {items.length > 0 && (
                    <div className="flex flex-col bg-white p-3 ">
                        <h2 className="whitespace-nowrap text-sm font-bold text-gray-500">Subtotal ( <a style={{color:"red", fontWeight:"500" , fontSize:"1.0rem"}}>{items.length} items </a>) :&#160;&#160; 
                         <span className="font-bold text-green-500 text-lg">
                             <Currency quantity={ total} currency="INR" />
                        </span>
                        <p>
                        
                        </p>
                        </h2>
                        <button 
                        role='link'
                        type="submit"
                        onClick={createCheckoutSesssion}
                        disabled={!session} 
                        className={`p-2 mt-3 ${!session ?" bg-gray-300  text-white opacity-70 font-bold rounded  cursor-not-allowed" : "button  text-gray-800 font-bold rounded " }`}>

                        {!session ?  "Signin to checkout"  : "Proceed to checkout"}
                        </button>
                    </div>
                )}

            </div>
        </main>
           
        </div>
    )
}

export default Checkout;
