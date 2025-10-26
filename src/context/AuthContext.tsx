import { createContext, useState } from "react";
import type { User } from "../types/user";

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => void
    logout: () => void
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {
    const defaultUser : User = { email: "guest@example.com", role: "guest" }
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : defaultUser;
    });

    const login = (email: string, password: string) => {
        let loggedUser : User;
        
        if (email === "admin@admin" && password === "admin") loggedUser ={email, role: "admin"};
        else loggedUser = {email, role: "guest"};
        
        setUser(loggedUser);
        localStorage.setItem("user", JSON.stringify(loggedUser));                                                                                    
    }

      const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    };

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) throw new Error("useAuth must be used within AuthContextProvider");
//     return context;
// }