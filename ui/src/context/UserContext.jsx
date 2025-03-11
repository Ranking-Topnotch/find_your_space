import { createContext, useState, useEffect, useContext } from "react";
import { UseIsAuthenticated } from "./UseIsAuthenticated";

// Create the context
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const { setIsAuthenticated } = useContext(UseIsAuthenticated)

    // Check if user is logged in on app load
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:8008/api/auth/check", {
                    credentials: "include", // Important for sending cookies
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.agent); // Set user from backend
                } else {
                    setUser(null); // Clear user if not authenticated
                }
            } catch (error) {
                setUser(null);
            }
        };

        checkAuth();
    }, []);

    // Function to log in a user
    const login = async (email, password) => {
        const response = await fetch("http://localhost:8008/agentLogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include", // Important for sending cookies
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        setUser(data.agent); // Store only necessary user data (NOT token)
    };

    // Function to log out the user
    const logout = async () => {
        await fetch("http://localhost:8008/api/auth/logout", {
            method: "POST",
            credentials: "include", // Ensure cookie is cleared
        });

        setUser(null);
        setIsAuthenticated(null)
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
