import { FILTERS } from "../../const";

type FiltersProps = {
  activeFilter: string,
  setActiveFilter: (filter: string) => void,
};
const Filters = ({activeFilter, setActiveFilter} : FiltersProps) => {
    return (
        <div className="flex items-center justify-center flex-wrap mt-3 mb-6 gap-4">
           {FILTERS.map((filter) => (
               <button
                   key={filter}
                   className={`md:px-4 md:py-2 px-2 py-1 rounded-md text-sm font-medium transition select-none focus:outline-none focus:ring-offset-2  duration-300 ease-in-out ${activeFilter === filter ? 'bg-blue-400 text-white' : 'bg-gray-800 text-white hover:bg-blue-300'}`}
                   onClick={() => setActiveFilter(filter)}
               >
                   {filter}
               </button>
           ))}
        </div>
    )
}

export default Filters