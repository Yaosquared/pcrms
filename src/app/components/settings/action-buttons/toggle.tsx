"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const Toggle = ({ bgModeValue }: { bgModeValue: number }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (bgModeValue === 1) {
      setTheme("dark");
    } else if (bgModeValue === 0) {
      setTheme("light");
    }
  }, [bgModeValue, setTheme]);

  return null;
};

export default Toggle;



