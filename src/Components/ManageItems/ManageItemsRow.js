import React from 'react';
import { Link } from 'react-router-dom';

const ManageItemsRow = ({item}) => {
    // let item = {
    //     "name": "সংস্কৃতি কথা",
    //     "discription": "lorem 100",
    //     "price": 300,
    //     "image": "https://cdn.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.webp",
    //     "quantity": 33,
    //     "added-at": "12 jan 2022",
    //     "supplier": "Rafid Raihan",
    //     "catagory": "Non fic"
    // }
    const { name, image, supplier,_id} = item;
    const hanldeRemoveItem = (id) => {
        console.log('removing',id);
        postData(`https://warehouse-server-9y3w.onrender.com/removeItem/${item._id}`,{id})
    }
    async function postData(url = '', data={}) {
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
        <tr className=''>
            <td className="px-6 py-4 font-bold  text-gray-800 whitespace-nowrap flex justify-center">
                <img className='w-[60px]' src={image} alt="" />
            </td>
            <td className="px-6 py-4 font-bold text-gray-800 whitespace-nowrap">
                {name}
            </td>
            
            
            
            <td className="px-6 py-4 font-bold text-center whitespace-nowrap">
                {supplier}
            </td>
            
            <td className="px-6 py-4 font-bold text-center whitespace-nowrap ">
                <Link onClick={()=>hanldeRemoveItem(_id)}><button className='p-3 bg-black/[.15] text-black rounded'>X</button></Link>
            </td>
        </tr>

    );
};

export default ManageItemsRow;

