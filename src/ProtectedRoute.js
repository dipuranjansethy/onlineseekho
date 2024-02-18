import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute1 = ({ children }) => {
  let location = useLocation();
  const {isAuthenticated,user} = useSelector(state => state.user);

  if(!isAuthenticated){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }else if(user && user.role!=='admin'){
    return <Navigate to="/profile" state={{ from: location }} replace />;    
  }

  return children;
};

export default ProtectedRoute1;
