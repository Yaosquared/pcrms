import { fetchAllRecordsCount } from "./actions";

const PaymentsHeader = async () => {
  const paymentsDataLength = await fetchAllRecordsCount();

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Payments ({paymentsDataLength})
      </h2>
    </div>
  );
};

export default PaymentsHeader;
