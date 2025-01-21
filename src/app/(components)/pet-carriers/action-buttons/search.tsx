import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchButton = () => {
  return (
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md px-3 py-2"
    >
      <FaMagnifyingGlass title="Search" size={20} />
    </button>
  );
};

export default SearchButton;
// 