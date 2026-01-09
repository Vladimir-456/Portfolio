import { useDispatch, useSelector } from "react-redux";
import { FILTERS } from "../../const";
import { selectCurrentFilter } from "../../redux/selectors";
import { setCurrentFilter } from "../../redux/app/selectors";

const Filters = () => {
  const currentFilter = useSelector(selectCurrentFilter);
  const dispatch = useDispatch();
  console.log(currentFilter);

  return (
    <div className="flex items-center justify-center sm:justify-start flex-wrap mt-4 mb-8 gap-3">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`md:px-5 md:py-2 px-2 py-1 rounded-md text-sm font-medium transition select-none focus:outline-none  duration-300 ease-in-out ${
            currentFilter === filter
              ? "bg-gray-600 text-white hover:bg-gray-400"
              : "bg-black text-white hover:bg-gray-600"
          }`}
          onClick={() => dispatch(setCurrentFilter(filter))}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
