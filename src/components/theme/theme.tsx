import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../redux/app/selectors";
import { useState } from "react";
import cn from "classnames";

const ThemeToggle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClickToggleTheme = () => {
    setIsClicked((prev) => !prev);
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <button
      className={cn(
        isClicked
          ? "flex h-6 w-10 items-center justify-end rounded-full p-1 bg-green-700"
          : "flex h-6 w-10 items-center  justify-start rounded-full p-1 bg-blue-700"
      )}
      onClick={handleClickToggleTheme}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="h-3 w-3 rounded-full bg-white shadow dark:bg-white-900"
      />
    </button>
  );
};

export default ThemeToggle;
