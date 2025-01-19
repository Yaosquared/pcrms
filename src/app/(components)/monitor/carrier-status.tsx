const CarrierStatus = () => {
  return (
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
  );
};

export default CarrierStatus;
