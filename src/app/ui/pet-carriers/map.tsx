"use client";

import { useState, useEffect } from "react";

export default function Map() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[100%] h-[50%] flex justify-center mx-auto shadow-md">
      {isClient && (
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tup%20cavite+(My%20Business%20Name)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      )}
    </div>
  );
}
