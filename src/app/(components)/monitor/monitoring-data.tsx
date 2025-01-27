import CarrierStatus from "@/app/(components)/monitor/carrier-status"; // not final
import Map from "@/app/ui/pet-carriers/map";
import CarrierControls from "@/app/(components)/monitor/carrier-controls";
import {
  fetchRecords,
  fetchSelectedCarrier,
} from "@/app/(components)/monitor/actions";

const Monitoring = async () => {
  const monitoringData = await fetchRecords();
  const selectedCarrier = await fetchSelectedCarrier();

  return (
    <>
      <CarrierStatus selectedCarrier={selectedCarrier} />
      <Map selectedCarrier={selectedCarrier} />
      <CarrierControls monitoringData={monitoringData} />
    </>
  );
};

export default Monitoring;
