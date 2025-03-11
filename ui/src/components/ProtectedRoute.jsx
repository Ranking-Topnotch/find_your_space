import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseIsAuthenticated } from "../context/UseIsAuthenticated";

const ProtectedRoute = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(UseIsAuthenticated);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:8008/api/auth/check", {
                    method: "GET",
                    credentials: "include", 
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth(); 

        const interval = setInterval(checkAuth, 3600000);

        return () => clearInterval(interval); 
    }, []);

    if (isLoading) return <p>Loading...</p>; 

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
