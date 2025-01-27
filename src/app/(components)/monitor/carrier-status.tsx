type SelectedCarrierProps = {
  monitoringId: string;
  deviceStatus: boolean | null;
  rangeStatus: boolean;
  carrierName: string;
  latitude: number;
  longitude: number;
};

const MonitoringData = async ({
  selectedCarrier,
}: {
  selectedCarrier: SelectedCarrierProps[];
}) => {
  const getRangeStatus = (
    deviceStatus: boolean | null,
    rangeStatus: boolean | null
  ) => {
    if (deviceStatus == true) {
      if (rangeStatus == true) {
        return " - In Range";
      } else {
        return " - Out of Range";
      }
    } else {
      return null;
    }
  };

  return (
    <>
      {selectedCarrier.map((carrier) => (
        <div key={carrier.monitoringId}>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 justify-between pb-1 md:pb-0 text-sm md:text-base lg:text-lg 2xl:text-xl">
            <p className="font-medium">
              <span>{carrier.carrierName}</span>
              <span
                className={
                  carrier.rangeStatus ? "text-green-600" : "text-red-600"
                }
              >
                {getRangeStatus(carrier.deviceStatus, carrier.rangeStatus)}
              </span>
            </p>
            <div className="flex space-x-4 text-xs lg:text-sm 2xl:text-base">
              <p>
                <span className="font-medium">Latitude</span>:{" "}
                {carrier.latitude}
              </p>
              <p>
                <span className="font-medium">Longitude</span>:{" "}
                {carrier.longitude}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MonitoringData;
