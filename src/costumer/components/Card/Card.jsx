import React from 'react';

const Card = ({product}) => {
    return (
        <div className="pt-[1rem] cursor-pointer flex flex-col items-center w-[12rem] my-[15px] bg-white rounded-lg shadow-2 p-[1.8rem] transform transition-transform duration-300 hover:scale-105 " style={{ boxShadow: '3px 4px 2px rgba(0, 0, 0, 0.1)', padding: '1rem', borderRadius: '8px' }}>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' 
                src={product.imageUrl} alt="Product" />
            </div>
            <div className='pt-4 text-center'>
                <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
    );
}

export default Card;
