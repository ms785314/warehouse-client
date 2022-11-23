import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

const PrivateRoute = ({ children }) => {
    const auth = getAuth(firebaseApp);
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (!loading) {
        if (!user) {
            return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
        }
    }
    return children;
};

export default PrivateRoute;