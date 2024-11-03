import { BsPersonFill } from "react-icons/bs";

interface RentDataProps {
  id: number;
  person: string;
  amount: string;
}

// Placeholder data for rent
const rentsData: RentDataProps[] = [
  { id: 1, person: "Mario", amount: "₱350" },
  { id: 2, person: "Jenson", amount: "Pending" },
  { id: 3, person: "Al", amount: "Pending" },
  { id: 4, person: "Christian", amount: "Pending" },
  { id: 5, person: "John Loyd", amount: "Pending" },
];
export default function LatestRents() {
  return (
    <div className="lg:h-[34rem] border rounded-md p-4 shadow-md">
      <h2 className="text-sm md:text-base lg:text-lg font-semibold">
        Latest Rents
      </h2>
      <div className="lg:h-[30rem] lg:overflow-y-auto">
        <ul className="bg-blue xl:space-y-2">
          {/* Map through rentsData array and display placeholder data in table */}
          {rentsData.map((rent: RentDataProps) => (
            <li
              key={rent.id}
              className="flex flex-row items-center gap-3 p-2 lg:pr-14 xl:pr-28 rounded-md hover:bg-accent"
            >
              <BsPersonFill size={40} />
              <div className="flex flex-col text-sm lg:text-base">
                <p className="font-medium">{rent.person}</p>
                <p>{rent.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
