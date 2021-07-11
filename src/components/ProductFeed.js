import React from 'react'
import Product from './Product';

function ProductFeed({products}) {
  return (
    <div className='z--10 grid grid-flow-row-dense md:grid-cols-3 xl:grid-cols-4 md:mt-10 sm:mt-20'>
       
        {/* Map the product and create list of product from FackStoreApi */}
        {products.map(({id,title,price,description,category,image})=>(   
         <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
            ))}

            <img 
            className="md:col-span-full"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" srcset="" />



      <div className='md:col-span-2'>
        {/* Map the product and create list of product from FackStoreApi */}
        {products
        .slice(4,5)
        .map(({id,title,price,description,category,image})=>(   
         <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
        ))}
        </div>

        {products.map(({id,title,price,description,category,image})=>(   
         <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
            ))}

    </div>
  )
}

export default ProductFeed
