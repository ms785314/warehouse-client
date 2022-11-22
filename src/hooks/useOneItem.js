import  { useEffect, useState } from 'react';

const useOneItem = (id) => {
    // let url =  'items.json'
    const [item, setitem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(item => setitem(item));
    }, [id]);
    // console.log('from ',items);
    return item;
};

export default useOneItem;