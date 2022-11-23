import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseApp } from '../../firebase';


const MyItems = () => {
    const auth = getAuth(firebaseApp);
    const [user] = useAuthState(auth);
    const [myItems,setMyItems] = useState([]);

    useEffect(()=>{
        postData(`https://warehouse-server-9y3w.onrender.com/myitems`,{email:user?.email}).then(res => setMyItems(res));
    },[user])


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
        <div>
            <h1 className='py-3 text-2xl font-bold'>Items Added By Me({user?.email})</h1>
            <div>
                {myItems.map((item,index) => {
                    return(
                        <div key={index} className="flex w-[300px] mx-auto items-center p-3 border justify-between my-2">
                            <p className='h-[50px] w-[50px]'><img className='h-[100%]'src={item.image} alt=''></img>
                            </p>
                            <p className='text-2xl font-bold'>Name: {item.name}</p>
                            <p><button className='bg-gray-400 p-4 rounded text-white'>X</button></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MyItems;