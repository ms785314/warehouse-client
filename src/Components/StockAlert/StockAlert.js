import React, { useContext } from 'react';
import { ItemsContext } from '../Home/Home';

const StockAlert = () => {
    const items = useContext(ItemsContext);
    // console.log('from stock',items);
    return (
        <div  className=' shadow-lg my-5'>
            <h1 className=' text-4xl font-bold'>Stock Alert</h1>
            <div className='flex flex-col'>
                <div className='flex  justify-evenly [] py-3 font-bold text-black'>
                    <p className='text-center w-full'>Id</p>
                    <p className='text-center w-full'>Name</p>
                    <p className='text-center w-full'>Sold</p>
                    <p className='text-center w-full'>Quantity</p>
                </div>
                {
                    items.filter(item => item.quantity < 10).map((item,index) => {
                        return (
                            <div className=' justify-evenly flex border' key={index}>
                                <p className='text-center py-3 w-full'>{index + 1}</p>
                                <p className='text-center py-3 w-full'>{item.name}</p>
                                <p className='text-center py-3 w-full'>{item.sold}</p>
                                <p className='text-red-600 text-center py-3 w-full'>{item.quantity}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default StockAlert;