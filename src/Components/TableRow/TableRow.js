import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({item}) => {
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
    const { name, discription, price, image, quantity, supplier, catagory } = item;
    return (
        <tr className=''>
            <td className="px-6 py-4 font-bold  text-gray-800 whitespace-nowrap flex justify-center">
                <img className='w-[60px]' src={image} alt="" />
            </td>
            <td className="px-6 py-4 font-bold text-gray-800 whitespace-nowrap">
                {name}
            </td>
            <td className="px-6 py-4 font-bold text-gray-800 whitespace-nowrap">
                {discription}
            </td>
            <td className="px-6 py-4 font-bold text-center whitespace-nowrap">
                {price}
            </td>
            <td className="px-6 py-4 font-bold">
                {quantity}
            </td>
            <td className="px-6 py-4 font-bold text-center whitespace-nowrap">
                {supplier}
            </td>
            <td className="px-6 py-4 font-bold  text-center whitespace-nowrap">
                {catagory}
            </td>
            <td className="px-6 py-4 font-bold text-center whitespace-nowrap ">

                <Link><button className='p-3 bg-black/[.15] text-black rounded'>Update</button></Link>
            </td>
        </tr>

    );
};

export default TableRow;

