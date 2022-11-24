import { getAuth } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { firebaseApp } from "../../firebase";



const AddInventory = () => {
    const auth = getAuth(firebaseApp);
    const [user] = useAuthState(auth)
    // const [addNotify,setAddNotify] = useState();

    const handleAddItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const catagory = e.target.catagory.value;
        const imageUrl = e.target.imageUrl.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const discription = e.target.discription.value;
        let item = { name, discription, price, image: imageUrl, quantity, sold: 0, supplier, catagory, addedBy: user?.email }
      

        postData(`https://wh-server-latest.onrender.com/addItem`, item)
            .then(res => { 
                if (res.acknowledged) {
                    toast('Added New Item');
                    e.target.name.value = '';
                    e.target.price.value = '';
                    e.target.supplier.value = '';
                    e.target.catagory.value = '';
                    e.target.discription.value = '';
                    e.target.imageUrl.value = '';
                    e.target.quantity.value = '';
                }
            })
    }

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

            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                        Add New Item
                    </h1>
                    <form className="mt-6" onSubmit={handleAddItem}>
                        <div className="mb-2 flex gap-3 items-center">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='name'
                                placeholder="enter product name"
                            />
                        </div>
                        <div className="mb-2 flex items-center gap-3">
                            <label
                                htmlFor="catagory"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Catagory
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='catagory'
                                placeholder="sci-fi/non-fic etc"
                            />
                        </div>
                        <div className="mb-2 flex items-center gap-3">
                            <label
                                htmlFor="imageUrl"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                ImageUrl
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='imageUrl'

                            />
                        </div>
                        <div className="mb-2 flex items-center gap-3">
                            <label
                                htmlFor="price"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                price
                            </label>
                            <input
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='price'

                            />
                        </div>
                        <div className="mb-2 flex items-center gap-3">
                            <label
                                htmlFor="discription"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                discription
                            </label>
                            <textarea
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='discription'

                            />
                        </div>
                        <div className="mb-2 flex items-center gap-3">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                quantity
                            </label>
                            <input
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='quantity'

                            />
                        </div>
                        <div className="mb-2 flex items-center gap-3">
                            <label
                                htmlFor="supplier"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                supplier
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                name='supplier'
                                placeholder="enter your name"
                            />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;