import React, { createContext, useEffect, useState } from 'react';
import Items from '../Itmes/Items';
import StockAlert from '../StockAlert/StockAlert';

export const ItemsContext = createContext('');

const Home = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(items => setitems(items));
    }, []);
    return (
        <div className='px-5'>
            <ItemsContext.Provider value={items}>
                <Items></Items>
                <StockAlert></StockAlert>
            </ItemsContext.Provider>


        </div>
    );
};

export default Home;