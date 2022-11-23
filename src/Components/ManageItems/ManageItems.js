import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageItemTable from './ManageItemTable';

const ManageItems = () => {
    const [items] = useItems();
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='my-6 text-3xl font-bold'>Manage Items:{items.length}</h1>
            <ManageItemTable items={items}></ManageItemTable>
            <button className="bg-blue-500 my-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate('/addinventory')}>
                Add New Items
            </button>
        </div>
    );
};

export default ManageItems;