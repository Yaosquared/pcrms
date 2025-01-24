import ProgressCard from "@/app/ui/dashboard/progress-card";
import {
  fetchPetCarrierMetrics,
  fetchDailyRentedCarrier,
  fetchDailyNewCustomerMetrics,
} from "./actions";

type PetCarrierProps = {
  carrierId: string;
  carrierName: string;
  batteryPercentage: number;
  deviceStatus: boolean;
  rentalStatus: boolean;
  createdAt: Date;
  updatedAt: Date | null;
};

type CustomerProps = {
  customerId: string;
  customerName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  idType: string;
  idNumber: string;
  createdAt: Date;
  updatedAt: Date | null;
};

const MetricCards = async () => {
  const petCarriersData = await fetchPetCarrierMetrics();
  const dailyPetCarriersData = await fetchDailyRentedCarrier();
  const customersData = await fetchDailyNewCustomerMetrics();

  const getAvailableCarrier = (petCarriersData: PetCarrierProps[]) => {
    return petCarriersData.filter(
      (petCarrier) => petCarrier.rentalStatus == false
    ).length;
  };

  const getOnRentPetCarrier = (petCarriersData: PetCarrierProps[]) => {
    return petCarriersData.filter(
      (petCarrier) => petCarrier.rentalStatus == true
    ).length;
  };

  const getTotalRentedCarrierToday = () => {
    return dailyPetCarriersData.length;
  };

  const getTotalNewCustomerToday = (customersData: CustomerProps[]) => {
    return customersData.length;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-x-auto lg:flex lg:flex-row lg:space-x-4 lg:gap-0">
      <div className="flex flex-col lg:flex-row border rounded-md shadow-md items-center py-4 space-y-2 lg:space-x-2 lg:px-2 lg:w-[25%] lg:justify-center 2xl:px-4 2xl:space-x-6">
        <ProgressCard
          value={getAvailableCarrier(petCarriersData)}
          colorValue="primary"
        />
        <p className="text-sm 2xl:text-lg font-semibold text-center">
          Available Pet Carrier/s
        </p>
      </div>

      <div className="flex flex-col lg:flex-row border rounded-md shadow-md items-center py-4 space-y-2 lg:space-x-2 lg:px-2 lg:w-[25%] lg:justify-center 2xl:px-4 2xl:space-x-6">
        <ProgressCard
          value={getOnRentPetCarrier(petCarriersData)}
          colorValue="danger"
        />
        <p className="text-sm 2xl:text-lg font-semibold text-center">
          On-Rent Pet Carrier/s
        </p>
      </div>

      <div className="flex flex-col lg:flex-row border rounded-md shadow-md items-center py-4 space-y-2 lg:space-x-2 lg:px-2 lg:w-[25%] lg:justify-center 2xl:px-4 2xl:space-x-6">
        <ProgressCard
          value={getTotalRentedCarrierToday()}
          colorValue="warning"
        />
        <p className="text-sm 2xl:text-lg font-semibold text-center">
          Rented Pet Carrier/s Today
        </p>
      </div>

      <div className="flex flex-col lg:flex-row border rounded-md shadow-md items-center py-4 space-y-2 lg:space-x-2 lg:px-2 lg:w-[25%] lg:justify-center 2xl:px-4 2xl:space-x-6">
        <ProgressCard
          value={getTotalNewCustomerToday(customersData)}
          colorValue="success"
        />
        <p className="text-sm 2xl:text-lg font-semibold text-center">
          New Customer/s Today
        </p>
      </div>
    </div>
  );
};

export default MetricCards;
