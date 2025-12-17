import { setCurrentFilter } from "../../app/app/app-slice";
import { selectCurrentFilter } from "../../app/app/selectors";
import { FILTERS } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Filters = () => {
  const activeFilter = useAppSelector(selectCurrentFilter);
  console.log(activeFilter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex md:justify-start sm:items-center sm:justify-center flex-wrap mt-3 md:mt-2 mb-6 gap-3">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`md:px-8 md:py-3 px-2 py-1 md:rounded-full rounded-md text-sm font-medium transition select-none focus:outline-none focus:ring-offset-2  duration-300 ease-in-out ${
            activeFilter === filter
              ? "bg-blue-400 text-white"
              : "bg-gray-800 text-white hover:bg-blue-300"
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
