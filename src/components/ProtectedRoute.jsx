import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ isAuth, children }) {
    return isAuth? children:<Navigate to='/Login'/>
}
export default ProtectedRoute;