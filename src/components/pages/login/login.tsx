import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { login } from "../../../app/auth/userSlice";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const user = useSelector((state: RootState) => state.auth.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) navigate('/');
    }, [user]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.type]: e.target.value
        });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        const userData = { email: formData.email, password: formData.password };
        dispatch(login(userData));
    }
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center min-h-screen gradient-bg bg-gray-900">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-gray-600">
                    <h1 className="text-xl font-bold text-gray-700 mb-6">Вход</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input 
                    className="mb-2 rounded px-3 py-2 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="email"  value={formData.email} 
                    placeholder="Email" 
                    onChange={handleChange} />
                    <input 
                    className="mb-3 rounded px-3 py-2 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="password" value={formData.password} 
                    placeholder="Пароль" 
                    onChange={handleChange} />
                    <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer font-semibold hover:bg-blue-700 transition duration-300 ease-in-out" 
                    type="submit">Войти</button>
                    <button className="  px-4 py-2 rounded cursor-pointer font-semibold hover:bg-gray-600 transition duration-300 ease-in-out">Нет аккаунта?</button>
                </form>
            </div>    
            </div>
        </div>
    )
}

export default Login