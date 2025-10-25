import { Link, useNavigate } from 'react-router-dom'
import { adminLinks, userLinks } from './const';
import { useUserStore } from '../../store/userStore';

const Header = () => {
    const user = useUserStore((state) => state.user);
    const logout = useUserStore((state) => state.logout);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <header>
            <div className='container mx-auto flex justify-between items-center px-4 py-2'>
                {user?.role === 'guest' &&  <a className='font-semibold text-xl bg-gray-400 bg-clip-text text-transparent'>Vladimir</a>}
                {user?.role === 'admin' &&  <a className='font-semibold text-xl bg-gray-400 bg-clip-text text-transparent'>Администратор</a>}
                <nav className='hidden md:flex gap-4 text-gray-400'>
                    {user?.role === 'admin' && <>
                        {adminLinks.map((link, index) => <Link key={index} to={link.to} className="bg-gray-400 bg-clip-text text-transparent transition duration-300 hover:text-white">{link.label}</Link>)}
                        <button onClick={handleLogout} className="bg-gray-400 bg-clip-text text-transparent transition duration-300 hover:text-white">Выйти</button>
                    </>}
                    {user?.role === 'guest' && <>
                    {userLinks.map((link, index) => <Link key={index} to={link.to} className="bg-gray-400 bg-clip-text text-transparent transition duration-300 hover:text-white">{link.label}</Link>)}
                        <button onClick={handleLogout} className="bg-gray-400 bg-clip-text text-transparent transition duration-300 hover:text-white">Войти</button>
                    </>}
                </nav>
                 <button className="md:hidden p-2 rounded-md ring-1 ring-gray-200">Menu</button>
            </div>
        </header>
    )
}

export default Header