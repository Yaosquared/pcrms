"use client";

import { useState, useEffect } from "react";

type SelectedCarrierProps = {
  monitoringId: string;
  deviceStatus: boolean | null;
  rangeStatus: boolean;
  carrierName: string;
  latitude: number;
  longitude: number;
};

const Map = ({
  selectedCarrier,
}: {
  selectedCarrier: SelectedCarrierProps[];
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isInRange, setIsInRange] = useState(false);

  useEffect(() => {
    const isConnected = selectedCarrier.some((carrier) => carrier.deviceStatus);
    const inRange = selectedCarrier.some((carrier) => carrier.rangeStatus);
    setIsConnected(isConnected);
    setIsInRange(inRange);
  }, [selectedCarrier]);

  return (
    <div className="w-[100%] h-[50%] flex justify-center mx-auto shadow-md">
      {isConnected ? (
        isInRange ? (
          <iframe
            width="100%"
            height="600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4206007091298!2d120.96352697586589!3d14.345053886111621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d43fdf3bf3d3%3A0x756d61b3739581bc!2sTechnological%20University%20of%20the%20Philippines%20%E2%80%93%20Cavite!5e0!3m2!1sen!2sph!4v1737981024318!5m2!1sen!2sph"
            className="rounded-md"
          />
        ) : (
          <iframe
            width="100%"
            height="600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.505230997239!2d120.96366736737144!3d14.345016859078745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d461c23a2723%3A0x3327e45b4fac7417!2sSt.%20Jude%20College%20Dasmari%C3%B1as%20Cavite!5e0!3m2!1sen!2sph!4v1737966844935!5m2!1sen!2sph"
            className="rounded-md"
          />
        )
      ) : (
        <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 font-semibold text-lg rounded-md">
          No location available
        </div>
      )}
    </div>
  );
};

export default Map;
