import { Divider } from "@mui/joy";

import Map from "@/app/ui/pet-carriers/map";
import PetCarrierCards from "@/app/(components)/pet-carriers.tsx/pet-carrier-cards";

export default function Monitor() {
  return (
    <article className="w-[100%] flex flex-col">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Monitor
      </h2>
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 justify-between pb-1 md:pb-0 text-sm md:text-base lg:text-lg 2xl:text-xl">
        <p className="font-medium">
          <span>PC1</span> - <span className="text-green-600">In Range</span>
        </p>
        <div className="flex space-x-4 text-xs lg:text-sm 2xl:text-base">
          <p>
            <span className="font-medium">Latitude</span>: 14.3450591
          </p>
          <p>
            <span>Longitude</span>: 120.963527
          </p>
        </div>
      </div>
      <Map />
      <PetCarrierCards />
    </article>
  );
}
