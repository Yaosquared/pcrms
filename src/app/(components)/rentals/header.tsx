import NewButton from "./action-buttons/new";

const RentalsHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Rentals
      </h2>
      <div className="flex flex-row text-xs lg:text-base font-medium">
        <NewButton />
      </div>
    </div>
  );
};

export default RentalsHeader;
