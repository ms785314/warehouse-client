import React from 'react';
import { useParams } from 'react-router-dom';

import useOneItem from '../../hooks/useOneItem';

const UpdateItem = () => {
    const {id} = useParams();
   
    const item = useOneItem(id);
    const {name,image,discription,sold,quantity} = item;
    console.log('item',item);
    return (
        <div className='min-h-full'>
            <h1>from id:{id}</h1>
            <div className='flex justify-center flex-col items-center'>
                <img src={image} alt="" />
                <p>name:{name}</p>

            </div>
        </div>
    );
};

export default UpdateItem;