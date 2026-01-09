import { Link, useNavigate } from "react-router-dom";
import { adminLinks, userLinks } from "./const";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { AUTH_LOGOUT } from "../../redux/auth/actions";
import ThemeToggle from "../theme/theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // if (user) {
  //   dispatch({
  //     type: ADD_TOAST,
  //     payload: { message: `Добро пожаловать, ${user.email}` },
  //   });
  // }

  const navigate = useNavigate();

  const handleClickMenu = () => setIsOpen((prev) => !prev);
  const handleClickClose = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch({ type: AUTH_LOGOUT });
    navigate("/login");
  };

  return (
    <header className="bg-white p-3 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 sm:py-1 sm:px-2 relative">
        {user?.role === "admin" ? (
          <Link
            to="/"
            className="font-semibold text-xl bg-gray-400 bg-clip-text text-black hover:text-gray-400 dark:text-gray-100"
          >
            Администратор
          </Link>
        ) : (
          <Link
            to="/"
            className="font-semibold text-xl bg-gray-400 bg-clip-text text-black dark:text-gray-400"
          >
            Гость
          </Link>
        )}

        <nav className="hidden md:flex gap-4">
          {user?.role === "admin" ? (
            <>
              {adminLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-600 transition duration-300 hover:text-gray-400 dark:hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="bg-black bg-clip-text text-transparent transition duration-300 hover:text-white "
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              {userLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="bg-black m-2 text-md dark:bg-gray-600 bg-clip-text text-transparent transition duration-300 hover:text-white dark:hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="bg-black dark:bg-gray-600 bg-clip-text text-transparent transition duration-300 hover:text-white dark:hover:text-cyan-300"
              >
                Войти
              </button>
            </>
          )}
        </nav>

        <button
          className="
          md:hidden 
          p-2 
          rounded-md 
          ring-1 
          ring-gray-600 
          px-2 py-1 
          text-white 
          hover:bg-gray-700 
          transition duration-300 ease-in-out"
          onClick={handleClickMenu}
        >
          Menu
        </button>

        {isOpen && (
          <nav
            className="
            md:hidden 
            fixed top-0 left-0 w-full h-screen 
            bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
            bg-opacity-95
            inset-0
            z-20 
            flex flex-col items-center justify-center 
            shadow-lg
            animate-fade-in
            backdrop-blur-lg"
          >
            <button
              onClick={handleClickClose}
              className="absolute top-4 right-4 text-2xl text-black font-bold px-2 py-1 rounded hover:bg-gray-800"
            >
              ×
            </button>
            <ul className="flex flex-col items-center gap-2">
              {user?.role === "admin"
                ? adminLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className="block py-2 px-6 rounded-lg text-white font-semibold text-lg shadow hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                : userLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className="block py-2 px-6 rounded-lg text-white font-semibold text-lg shadow hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    handleClickClose();
                  }}
                  className="block py-2 px-3 rounded hover:bg-gray-100 w-full text-left text-white rounded"
                >
                  {user?.role === "admin" ? "Выйти" : "Войти"}
                </button>
              </li>
            </ul>
          </nav>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
