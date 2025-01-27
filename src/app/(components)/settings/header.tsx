import { fetchAllRecordsCount } from "./actions";

const SettingsHeader = async () => {
  const settingsDataLength = await fetchAllRecordsCount();

  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
        Settings ({settingsDataLength})
      </h2>
    </div>
  );
};

export default SettingsHeader;
