import React ,{useState} from 'react'
import Image from 'next/image'
// import AmzonLogo from '../assets/amazon-logo.svg'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon, 
    ShoppingBagIcon    
    } from  '@heroicons/react/outline';
    import {signIn,signOut,useSession} from "next-auth/client"
    // import { } from '@heroicons/react/solid'
import {useRouter} from "next/router"
// import { route } from 'next/dist/next-server/server/router';
 import {useSelector } from "react-redux"
 import {selectItems} from "../slices/basketSlice"



function Header({products,navbarOption}){
    const [session] = useSession();
    const items = useSelector(selectItems);
    const router = useRouter();
    const [itemState,setItemState] = useState("");
    const [searchTerm,setSearchterm] = useState("");
    const [navbar,setNavbar] = useState(false)
    
    
    

    const onButtonClick=()=>{
        // router.push('/search')


        if(!searchTerm )
        {
            console.log(itemState)
           
        }else{
            console.log(searchTerm)
        }
       
       
       
    }

    const changeNavbar =()=>{
        
        // console.log(window.scrollY)
            if(window.scrollY>= 352){
               return setNavbar(true)
            }else{
              return  setNavbar(false)
            }
    }
    window.addEventListener('scroll',changeNavbar)

    

    
    return(
        <header>
            <div className={ navbar ? 'navbar2' : 'navbar1'}>
                <div className='mt-1 flex items-center flex-grow sm:flex-grow-0 pr-0  hover:drop-shadow-lg cursor-pointer ' onClick={()=>router.push('/')} >
                    {/* <Image
                        onClick={()=>router.push('/')}
                        src={AmzonLogo}
                        width={100}
                        height={10}
                        objectFit='contain'
                        className='cursor-pointer'
                    /> */}
                    <ShoppingBagIcon className={navbar ?" pb-1 drop-shadow-xl  h-12" : " text-white pb-1 drop-shadow-xl  h-12 hover:text-green-200"  }   onClick={()=>router.push('/')}/> 
                    <a className= {navbar ? " font-extrabold font-mono  pr-5" : "text-white font-extrabold font-mono  pr-5 hover:text-green-200"}  onClick={()=>router.push('/')}>Stock </a>
                </div>


                {/* Search */}
                <div className="hidden  sm:flex items-center h-12  bg-white shadow-lg  flex-grow cursor-pointer  "
                style={{borderRadius:"100px"}}
                >
                   
               <select className="  p-1 px-5 h-full text-green-500  w-1 bg-white  font-mono rounded-full  " onChange={(e)=>{
                    const selectItem = e.target.value;
                    setItemState(selectItem)
                }}   >
                <option value ="All"    >ALL</option>
                <option value="clothes"  >clothes</option>
                <option value="Electronics" >Electronics</option>
                <option value="Jewelery" >Jewelery</option>
                </select>
 


               
                    <input className=" p-2 px-2 h-full flex-grow  foucs:focus-outline-none  " type="text" placeholder={itemState === "All" ? " " : itemState }  onChange={(e)=>{setSearchterm(e.target.value)}} />
                    <span className=" h-12 shadow-xl w-18 bg-green-500 items-center md:hover:w-20 hover:bg-green-600 " style={{borderRadius:"100px",boxShadow: "10px 10px 59px -3px rgba(1,43,28,0.74)"}}> 
                    <SearchIcon className=" h-full text-white p-3 " onClick={onButtonClick}/>
                    </span>
                </div>



                {/* Right */}
                <div  className={ navbar ? 'RightNavbar1' : 'RightNavbar2'} style={{WebkitTapHighlightColor:"#ffffff00"}} >
                    <div onClick={!session ? signIn : signOut} className="link has-tooltip"> 
                    <span class='tooltip rounded shadow-lg p-2 bg-blue-500 text-white  mt-8'>{session ? `click to Sign Out` :'click to  Sign In'}</span>
                        <p className='font-bold md:text-sm'>{session ? `Hello, ${session.user.name}` :'Sign In'}</p>
                    </div>
                    <div className="link" onClick={()=>router.push("/orders")} style={{WebkitTapHighlightColor:"#ffffff00"}}>
                        <p className='font-bold md:text-sm '>Order</p>
                    </div>
                    <span className="absolute top-2 right-4 h-4 w-4 md:top-2 z-50 md:right-7 md:h-5 md:w-5   text-center font-bold  bg-yellow-400 rounded-full text-black">{items.length}</span>
                    <div onClick={()=>router.push('/checkout')} className="relative link flex items-center" style={{WebkitTapHighlightColor:"#ffffff00"}}>
                        <ShoppingCartIcon className="h-7  md:h-9" style={{WebkitTapHighlightColor:"#ffffff00"}} />
                    </div>
                </div>
            </div>

            
            {/* Bottom nav */}
            {/* <div className="flex items-center bg-amazon_blue-light space-x-3 p-1 pl-2 text-white text-xs">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1 "/>
                    ALL</p>

                <p className='link'>Peim vedio</p>    
                <p className='link'>Amazon Button</p>    
                <p className='link'>Today's deal</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>    
                <p className='link hidden lg:inline-flex'>Food & Grachy</p>    
                <p className='link hidden lg:inline-flex'>Prime</p>    
                <p className='link hidden lg:inline-flex'>Buy Again</p>    
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>    
                <p className='link hidden lg:inline-flex'>Health & Persnol</p>    
            </div> */}
        </header>
    );
}


export default Header;