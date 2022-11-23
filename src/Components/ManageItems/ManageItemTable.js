import ManageItemsRow from "./ManageItemsRow";

export default function ManageItemTable({items = []}) {
    // const [items,setitems] = useState([]);
    // useEffect(()=>{
    //     fetch('items.json')
    //     .then(res=>res.json())
    //     .then(items => setitems(items));
    // },[]);
    // const items = useContext(ItemsContext);
    // const items = [];

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
                                        SUPPLIER
                                    </th>
                                    
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-bold text-center text-gray-500 uppercase "
                                    >
                                        Remove
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y [&>*:nth-child(odd)]:bg-gray-500/[.15] [&>*:nth-child(even)]:bg-blue-500divide-gray-200">
                                {
                                    items.map((item, index) => <ManageItemsRow item={item} key={index}></ManageItemsRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
