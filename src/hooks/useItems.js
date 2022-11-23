import { useEffect, useState } from 'react';

const useItems = () => {
    // let url =  'items.json'
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('https://warehouse-server-9y3w.onrender.com/items')
            .then(res => res.json())
            .then(items => setitems(items));
    }, []);
    // console.log('from ',items);
    return [items, setitems]
};

export default useItems;