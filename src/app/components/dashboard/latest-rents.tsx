import { BsPersonFill } from "react-icons/bs";

import { fetchLatestRents } from "./actions";

const LatestRents = async () => {
  const rentalsData = await fetchLatestRents();

  return (
    <div className="lg:h-[34rem] border rounded-md p-4 shadow-md">
      <h2 className="text-sm md:text-base lg:text-lg font-semibold">
        Latest Rents
      </h2>
      <div className="lg:h-[30rem] lg:overflow-y-auto scrollbar-hide">
        <ul className="bg-blue xl:space-y-2">
          {rentalsData.map((rental) => (
            <li
              key={rental.rentalId}
              className="flex flex-row items-center gap-3 p-2 lg:pr-14 xl:pr-28 rounded-md hover:bg-accent transition duration-300 ease-in-out"
            >
              <BsPersonFill size={40} />
              <div className="flex flex-col text-sm lg:text-base">
                <p className="font-medium">{rental.customerName}</p>
                <p>
                  {rental.payments && rental.payments.totalAmount != 0
                    ? `₱${rental.payments.totalAmount}`
                    : "Pending"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestRents;
