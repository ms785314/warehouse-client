import React, { useContext } from "react";
import { ItemsContext } from "../Home/Home";
import TableRow from "../TableRow/TableRow";

export default function Table() {
    // const [items,setitems] = useState([]);
    // useEffect(()=>{
    //     fetch('items.json')
    //     .then(res=>res.json())
    //     .then(items => setitems(items));
    // },[]);
    const items = useContext(ItemsContext);

    return (
        <div className="flex flex-col shadow-lg">
            <div>
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className=" border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Image
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Discription
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Price
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        SUPPLIER
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Catagory
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Manage
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y [&>*:nth-child(odd)]:bg-gray-500/[.15] [&>*:nth-child(even)]:bg-blue-500divide-gray-200">
                                {
                                    items.map((item, index) => <TableRow item={item} key={index}></TableRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
