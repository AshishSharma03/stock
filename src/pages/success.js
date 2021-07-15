import Header from '../components/Header'
import {CheckCircleIcon} from "@heroicons/react/solid"
import { useRouter } from 'next/router';

function Success() {
    const router = useRouter();


    return (
        <div className="bg-gradient-to-t from-blue-300  via-green-400 to-green-500 h-screen mt"> 
            <Header/>
            <br />
            <br />
            <br />
            <main className="max-w-screen-lg mx-auto  mt-32 pt-0  p-5">
                <div className="flex flex-col p-10 bg-white rounded-3xl shadow-xl ">
                    <div className="flex items-center space-x-2 mb-5 ">
                        <CheckCircleIcon className="text-green-400  h-10"/>
                        <h1 className="md:text-3xl text-md font-bold"> Thank you , your order has been confirmed! </h1>
                        </div>
                        <p className=" font-medium text-gray-600" >
                            Thank you for shopping with us. We'll send a confirmation once your item has shipped, if you would like to check the status your order(s) please press the link below.
                        </p>
                        <button  onClick={()=> router.push("/orders")} className="mt-8 p-3 md:mr-72 md:ml-72 bg-green-400 text-xl text-white rounded-3xl hover:bg-green-200  shadow-lg font-bold">Go to my orders</button>
                </div>
            </main>
        </div>
    )
}

export default Success;
