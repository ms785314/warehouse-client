import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../Table/Table';

const Items = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='p-4'>
                <Table></Table>
                <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate('/manageitems')}>
                    Manage Inventory
                </button>
            </div>
        </div>
    );
};

export default Items;