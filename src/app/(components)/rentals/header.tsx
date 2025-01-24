import NewButton from "./action-buttons/new";
import { fetchAvailableCarriers, fetchCustomers } from "./actions";

type CarrierProps = {
  carrierId: string;
  carrierName: string;
};

type CustomerProps = {
  customerId: string;
  customerName: string;
};

const RentalsHeader = async () => {
  const availableCarriers: CarrierProps[] = await fetchAvailableCarriers();
  const customerNames: CustomerProps[] = await fetchCustomers();

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Rentals
      </h2>
      <div className="flex flex-row text-xs lg:text-base font-medium">
        <NewButton
          availableCarriers={availableCarriers}
          customerNames={customerNames}
        />
      </div>
    </div>
  );
};

export default RentalsHeader;
