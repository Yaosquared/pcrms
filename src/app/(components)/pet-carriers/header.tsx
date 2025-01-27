import Link from "next/link";
import { FiMonitor } from "react-icons/fi";

import NewButton from "./action-buttons/new";
import { fetchAllRecordsCount } from "./actions";

const PetCarriersHeader = async () => {
  const petCarriersDataLength = await fetchAllRecordsCount();

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Pet Carriers ({petCarriersDataLength})
      </h2>
      <div className="flex flex-row text-xs lg:text-base font-medium space-x-2">
        <NewButton />
        <button className="flex flex-row items-center rounded-md p-2 lg:space-x-2 xl:px-4 xl:py-3 bg-green-600 hover:bg-green-700 text-white shadow-md">
          <Link href="/pet-carriers/monitor">
            <div className="flex flex-row items-center lg:space-x-2">
              <FiMonitor size={20} />
              <span className="hidden lg:block lg:text-sm 2xl:text-base">
                Monitor
              </span>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PetCarriersHeader;
