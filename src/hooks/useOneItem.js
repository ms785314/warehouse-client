import  { useEffect, useState } from 'react';

const useOneItem = (id) => {
    
    const [item, setitem] = useState([]);
    useEffect(() => {
        fetch(`https://wh-server-latest.onrender.com/items/${id}`)
            .then(res => res.json())
            .then(item => setitem(item));
    }, [id]);
    // console.log('from ',items);
    return item;
};

export default useOneItem;