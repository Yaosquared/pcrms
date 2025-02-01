import prisma from "@/lib/prisma";
import { format } from "date-fns";

import EditButton from "./action-buttons/edit";
import Toggle from "./action-buttons/toggle";
import { fetchAllRecordsCount, fetchRecords } from "./actions";
import Pagination from "./action-buttons/pagination";

const SettingsTable = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const settingsData = await fetchRecords(search, page);
  const settingsDataLength = await fetchAllRecordsCount();

  const bgModeValue = await prisma.settings.findUnique({
    where: {
      code: "BG_MODE_TOGGLE",
    },
    select: {
      value: true,
    },
  });

  const getValue = (value: number) => {
    if (value === 1) {
      return 1;
    } else if (value === 0) {
      return 0;
    } else {
      return value;
    }
  };

  const getCreatedDate = (createdAt: Date) => {
    return format(new Date(createdAt), "MMMM dd, yyyy");
  };

  const getUpdatedDate = (updatedAt: Date | null) => {
    if (updatedAt !== null) {
      return format(new Date(updatedAt), "MMMM dd, yyyy");
    } else {
      return "";
    }
  };

  return (
    <>
      <div>
        <div className="overflow-x-auto text-sm">
          <table className="w-[100%] text-left">
            <thead>
              <tr className="border-b-2 space-x-4 whitespace-nowrap">
                <th className="px-1 py-2">Code</th>
                <th className="px-1">Description</th>
                <th className="px-1">Value</th>
                <th className="px-1">Date Created</th>
                <th className="px-1">Date Updated</th>
                <th className="px-1">Modified By</th>
                <th className="px-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {settingsData.map((setting) => (
                <tr
                  key={setting.settingId}
                  className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 whitespace-nowrap"
                >
                  <td className="px-1 py-2">{setting.code}</td>
                  <td className="px-1">{setting.description}</td>
                  <td className="px-1">{getValue(setting.value)}</td>
                  <td className="px-1">{getCreatedDate(setting.createdAt)}</td>
                  <td className="px-1">{getUpdatedDate(setting.updatedAt)}</td>
                  <td className="px-1">{setting.modifiedBy}</td>
                  <td>
                    <div className="flex flex-row items-center space-x-2 lg:space-x-3">
                      <EditButton
                        id={setting.settingId}
                        code={setting.code}
                        description={setting.description}
                        value={setting.value}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination settingsDataLength={settingsDataLength} />

        {bgModeValue && <Toggle bgModeValue={bgModeValue.value} />}
      </div>
    </>
  );
};

export default SettingsTable;
