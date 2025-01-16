// "use client";

// // import { useState } from "react";
// // import { useTheme } from "next-themes";

// // import { messageClick } from "@/app/ui/message";
// // import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// // import { BsFillMegaphoneFill } from "react-icons/bs";
// // import { FaEdit } from "react-icons/fa";
// // import { MdDelete } from "react-icons/md";

// // interface SettingsDataProps {
// //   id: number;
// //   code: string;
// //   description: string;
// //   value: number | string;
// //   modifiedDateTime: string;
// //   modifiedBy: string;
// // }

// // Placeholder data for settings table
// // const initialSettingsData: SettingsDataProps[] = [
// //   {
// //     id: 1,
// //     code: "RENTAL_PRICE",
// //     description: "Change rental price of pet carrier per hour",
// //     value: 30,
// //     modifiedDateTime: "May 23, 2024, 9:27:52 AM",
// //     modifiedBy: "Admin",
// //   },
// //   {
// //     id: 2,
// //     code: "BG_MODE_TOGGLE",
// //     description: "Toggle background mode into: 1 = Light, 2 = Dark",
// //     value: "",
// //     modifiedDateTime: "Oct 9, 2024, 5:42:12 PM",
// //     modifiedBy: "Admin",
// //   },
// // ];

// // type Anchor = "right";

// export default function SettingsTable() {
//   // const { setTheme } = useTheme();
//   // const [bgMode, setBgMode] = useState("");

//   // Function to activate drawer when a table row is clicked
//   // const toggleDrawer =
//   //   (anchor: Anchor, open: boolean) =>
//   //   (event: React.KeyboardEvent | React.MouseEvent) => {
//   //     if (
//   //       event &&
//   //       event.type === "keydown" &&
//   //       ((event as React.KeyboardEvent).key === "Tab" ||
//   //         (event as React.KeyboardEvent).key === "Shift")
//   //     ) {
//   //       return;
//   //     }

//   //     setState({ ...state, [anchor]: open });
//   //   };

//   // const [settingsData, setSettingsData] = useState(initialSettingsData);
//   // const [state, setState] = useState({
//   //   right: false,
//   // });

//   // // Logic for setting the theme based on the inputted value
//   // const handleSave = () => {
//   //   if (bgMode === "1" || bgMode === "2") {
//   //     setTheme(bgMode === "1" ? "light" : "dark");
//   //     // Update the value of BG_MODE_TOGGLE based on input in table
//   //     setSettingsData((prevSettingsData) =>
//   //       prevSettingsData.map((setting) =>
//   //         setting.code === "BG_MODE_TOGGLE"
//   //           ? { ...setting, value: parseInt(bgMode) }
//   //           : setting
//   //       )
//   //     );
//   //   } else {
//   //     alert("Invalid input. Please input either 1 or 2.");
//   //   }
//   //   setState({ ...state, right: false });
//   // };

//   return (
//     <div className="space-y-4 text-xs lg:text-sm 2xl:text-base">
//       {/* <div className="overflow-x-auto">
//         <table className="w-[100%] text-left">
//           <thead>
//             <tr className="border-b-2 space-x-4 whitespace-nowrap">
//               <th className="px-1 py-2">Code</th>
//               <th className="px-1">Description</th>
//               <th className="px-1">Value</th>
//               <th className="px-1">Modified Date & Time</th>
//               <th className="px-1">Modified By</th>
//               <th className="px-1">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {settingsData.map((setting: SettingsDataProps) => (
//               <tr
//                 key={setting.id}
//                 className="border-b text-gray-900 hover:bg-accent dark:text-gray-200 whitespace-nowrap"
//               >
//                 <td className="px-1 py-2">{setting.code}</td>
//                 <td className="px-1">{setting.description}</td>
//                 <td className="px-1">{setting.value}</td>
//                 <td className="px-1">{setting.modifiedDateTime}</td>
//                 <td className="px-1">{setting.modifiedBy}</td>
//                 <td>
//                   <div className="flex flex-row items-center space-x-2 lg:space-x-3">
//                     <FaEdit
//                       size={24}
//                       onClick={toggleDrawer("right", true)}
//                       className="text-blue-600 hover:text-blue-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 cursor-pointer"
//                     />
//                     <MdDelete
//                       size={24}
//                       onClick={messageClick}
//                       className="text-red-600 hover:text-red-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}

//       {/* <SwipeableDrawer
//         anchor="right"
//         open={state.right}
//         onClose={toggleDrawer("right", false)}
//         onOpen={toggleDrawer("right", true)}
//         PaperProps={{
//           className:
//             "w-[70%] md:w-[40%] lg:w-[35%] 2xl:w-[30%] dark:bg-[#121212]",
//         }}
//       >
//         <div className="px-4 py-10 space-y-10">
//           <form className="flex flex-col space-y-4 text-foreground text-sm lg:text-base">
//             <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
//               Edit Setting Record
//             </h3>
//             <p className="border border-dashed flex flex-row justify-center items-center text-center text-foreground px-3 py-2 rounded-lg font-semibold italic gap-2 md:gap-3 lg:gap-4 2xl:gap-4 text-xs md:text-sm lg:text-base 2xl:text-lg">
//               <span>
//                 <BsFillMegaphoneFill
//                   size={20}
//                   color="red"
//                   className="md:w-6 md:h-6 2xl:w-7 2xl:h-7"
//                 />
//               </span>
//               Configuration for the value of `BG_MODE_TOGGLE` is only available
//               at the moment.
//             </p>
//             <input
//               type="text"
//               placeholder="Code"
//               className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
//             />
//             <input
//               type="text"
//               placeholder="Value"
//               value={bgMode}
//               onChange={(e) => setBgMode(e.target.value)}
//               className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
//             />
//             <div>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 className="w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </SwipeableDrawer> */}
//     </div>
//   );
// }
