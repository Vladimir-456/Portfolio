import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="mt-60 text-center">
            <div>
                <h1 className="p-3 text-4xl font-bold text-red-600">404</h1>
                <p className="p-3  mb-4 text-2xl font-bold text-red-400">Страница не найдена</p>
            </div>
            <button className="cursor-pointer p-3 bg-gray-400 rounded transition duration-300 ease-in-out hover:bg-gray-600"><Link to="/">Вернуться на главную</Link></button>
        </div>
    );
}

export default NotFound