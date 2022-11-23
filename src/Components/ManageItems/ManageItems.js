import React from 'react';
import useItems from '../../hooks/useItems';
import ManageItemTable from './ManageItemTable';

const ManageItems = () => {
    const [items] = useItems();
    return (
        <div>
            <h1 className='my-6 text-3xl font-bold'>Manage Items:{items.length}</h1>
            <ManageItemTable items={items}></ManageItemTable>
        </div>
    );
};

export default ManageItems;