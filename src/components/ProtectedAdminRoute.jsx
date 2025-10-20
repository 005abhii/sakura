import { Navigate, useLocation } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {                                                     // creating the main protected component for the Admin route
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";                     // storing the authenticated token in a local storage
    const location = useLocation();                                                                 // get the current location

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;                         // navigating the user to the login page if they are not authenticated
    }

    return children;                                                                                // returning the children component
};

export default ProtectedAdminRoute;                                                                 // exporting the ProtectedAdminRoute component for App.jsx
