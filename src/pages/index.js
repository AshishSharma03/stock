import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/client";

export default function Home({products}) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Stock</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      
      <Header products={products}/>
      <br/>
        <br/>
            <Banner/>
           
      <main className="max-w-screen-2xl mx-auto">
    {/* Banner */}
           
     
       
      {/* passing FakeSTOREAPI product in Productfeed components */}
      <ProductFeed products={products}/>  
       
      </main>
      
      

      
    </div>
  );
}

// Fetching Data from FACKSTOREAPI
export async function getServerSideProps(context){
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );   

  return{
    props:{
      products,
      session
    }
  } 
}

