import React from "react";

const ProductCard = ({Product}) => {
    return (
       
            <div className=" pt-[1rem] cursor-pointer flex flex-col items-center w-[12rem] my-[15px] bg-white rounded-lg shadow-2 p-[1.8rem] transform transition-transform duration-300 hover:scale-105 " style={{ boxShadow: '3px 4px 2px rgba(0, 0, 0, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                <div className='h-[13rem] w-[10rem]'>
                    <img className='object-cover object-top w-full h-full'
                        src={Product.imageUrl} alt="" />
                </div><br />
                <div className="text-left">
                    <b><h6>{Product.brand}</h6></b>
                    <p>{Product.title}</p>
                    <p>{Product.type}</p>
                    <p><b>&#8377;{Product.discountprice}</b>&nbsp; <strike className="text-gray-500">&#8377;{Product.actualprice}</strike> <b><span className="text-green-500">&nbsp;{Product.discount}% off</span></b></p>
                </div>
            </div>
        
    )
}
export default ProductCard