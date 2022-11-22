import React, { createContext, useEffect, useState } from 'react';
import useItems from '../../hooks/useItems';
import Footer from '../Footer/Footer';
import Items from '../Itmes/Items';
import Stat from '../Stat/Stat';
import StockAlert from '../StockAlert/StockAlert';

export const ItemsContext = createContext('');

const Home = () => {
    // const [items, setitems] = useState([]);
    // useEffect(() => {
    //     fetch('items.json')
    //         .then(res => res.json())
    //         .then(items => setitems(items));
    // }, []);
    const [items] = useItems();
    // console.log('item',items);
    
    return (
        <div className='px-5'>
            <ItemsContext.Provider value={items}>
                <Items></Items>
                <Stat></Stat>
                <StockAlert></StockAlert>
                <Footer></Footer>
            </ItemsContext.Provider>
        </div>
    );
};

export default Home;