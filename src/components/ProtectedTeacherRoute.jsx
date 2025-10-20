import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedTeacherRoute = ({ children }) => {                                                   // creating the main protected component for the teacher route
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();                                                                   // use navigate alternative for navigating between the pages 

  useEffect(() => {
    // Check authentication status from localStorage
    const checkAuth = () => {
      const authStatus = localStorage.getItem("teacherAuthenticated") === "true";
      setIsTeacherAuthenticated(authStatus);
      setIsLoading(false);
    };
    checkAuth();                                                                                    // checks for the authentication stage if authentication is successfull the stores the token in the local storage
    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);                                             // remove the event listener when the component unmounts
    };
  }, []);
  if (isLoading) {
    return null;                                                                                    // or a loading spinner
  }
  if (!isTeacherAuthenticated) {
    // Store the attempted location
    sessionStorage.setItem('teacherRedirectPath', location.pathname);
    return <Navigate to="/teacher-login" state={{ from: location }} replace />;
  }
  return children;
};
export default ProtectedTeacherRoute;