import  { useEffect, useState } from 'react';

const useItems = () => {
    // let url =  'items.json'
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(items => setitems(items));
    }, []);
    // console.log('from ',items);
    return [items,setitems]
};

export default useItems;