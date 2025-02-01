// "use client";

// import { useState } from "react";

// interface PetCarrierProps {
//   id: number;
//   name: string;
//   status: string;
//   time: string;
// }

// const petCarriers: PetCarrierProps[] = [
//   { id: 1, name: "PC1", status: "connected", time: "00:06:02:30" },
//   { id: 2, name: "PC2", status: "connected", time: "00:04:15:55" },
//   { id: 3, name: "PC3", status: "connected", time: "00:03:27:18" },
//   { id: 4, name: "PC4", status: "connected", time: "00:00:30:40" },
//   { id: 5, name: "PC5", status: "not connected", time: "00:00:00:00" },
// ];

// export default function PetCarrierCards() {
//   const [selectedCarrierId, setSelectedCarrierId] = useState<number | null>(
//     null
//   );

//   const handleClick = (id: number) => {
//     setSelectedCarrierId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <div className="w-[100%] flex flex-col py-4 space-y-2">
//       <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-9 md:items-center space-y-2 md:space-y-0">
//         <h3 className="text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
//           Pet Carrier Details
//         </h3>
//         <div className="flex space-x-2 md:space-x-3 text-xs md:text-sm lg:text-base">
//           <div className="flex items-center space-x-1">
//             <div className="w-2 h-2 rounded-full bg-green-600 flex items-center justify-center"></div>
//             <p>Connected</p>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-2 h-2 rounded-full bg-red-600 flex items-center justify-center"></div>
//             <p>Not Connected</p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="overflow-x-auto flex flex-row space-x-4">
//           {petCarriers.map((carrier: PetCarrierProps) => (
//             <div
//               key={carrier.id}
//               onClick={() => handleClick(carrier.id)}
//               className={`relative border rounded-md shadow-md text-xs md:text-sm lg:text-base cursor-pointer ${
//                 selectedCarrierId === carrier.id ? "bg-accent" : ""
//               }`}
//             >
//               <div
//                 className={`absolute top-0 right-0 w-1.5 h-1.5 m-1 rounded-full ${
//                   carrier.status === "connected" ? "bg-green-600" : "bg-red-600"
//                 }`}
//               />
//               <div className="flex flex-row items-center space-x-3 p-3.5">
//                 <p className="font-medium">{carrier.name}</p>
//                 <p>{carrier.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
