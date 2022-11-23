
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

export default function Resigter() {
    const auth = getAuth(firebaseApp);
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister  = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        createUserWithEmailAndPassword(email,password);
    }
    if (error) {
        // console.log('error',error);
    }
    // console.log('user in',user);
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Register
                </h1>
                <form className="mt-6" onSubmit={handleRegister}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                            name='email'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                            name='password'
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                           {loading? 'loading': 'Register'}
                        </button>
                    </div>
                </form>
                
                

                <p className="mt-8 text-xl font-light text-center text-gray-700">
                    {" "}
                    Allready have an account?{" "}
                    <Link
                        to={'/login'}
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
