import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useOneItem from '../../hooks/useOneItem';

const UpdateItem = () => {
    const { id } = useParams();

    const item = useOneItem(id);
    const { name, image, price, discription, supplier, sold, quantity } = item;

    // console.log('item', item);

    const [qty, setQty] = useState(0);
    useEffect(() => {
        setQty(quantity)
    }, [quantity])
    // setQty(quantity)

    function handleDelivered() {
        // console.log('hehe');
        if (qty > 1) {
            setQty(qty - 1);
            let updatedItem = { ...item, quantity: qty - 1 }
            // console.log(updatedItem);
            
            postData(`https://wh-server-latest.onrender.com/update/${item._id}`,updatedItem)
        }
    }
    function handleRestock(e) {
        e.preventDefault();
        const value = parseInt(e.target.stockNumber.value);
        // console.log(val);
        if (value) {
            setQty(qty + value);
            let updatedItem = { ...item, quantity: qty + value }
            // console.log('udta',updatedItem);
            postData(`https://wh-server-latest.onrender.com/update/${item._id}`,updatedItem)
            e.target.stockNumber.value = '';
        }
    }

    // for post quantity changes in database:
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(data)
        });
        return response.json();
    }


    return (
        <div className='min-h-full'>

            <div className='py-8 w-[300px] px-14 mt-5  mx-auto shadow-lg flex justify-center flex-col items-center'>
                <img src={image} alt="" />
                <p className='text-3xl my-5 font-bold'>{name}</p>
                <p className='my-3 '>{discription}</p>
                <p className='text-xl font-semibold'>Supplier: {supplier}</p>
                <p className='text-xl font-bold'>Price:{price}</p>
                <p className='text-xl py-2 font-bold'>Sold:{sold}</p>
                <p className='text-xl py-2 font-bold'>Quantity:{qty}</p>
            </div>
            <div className='flex w-[300px] mx-auto my-7   gap-3 justify-between'>
                <form onSubmit={(e)=>handleRestock(e)} className='flex gap-2'>
                    <input min={0} type="number" placeholder='0' name="stockNumber" className='border text-center  border-red-300 w-[50px]' />
                    <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >
                    Restock
                </button>
                </form>
                <div >
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleDelivered}>
                        Delivered
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;