"use client";

import { useTheme } from "next-themes";
import CircularProgress from "@mui/joy/CircularProgress";
import { useMediaQuery } from "@mui/material";

interface PercentageCardProps {
  value: number;
  // Use neutral when value is 0
  colorValue: "primary" | "neutral" | "danger" | "success";
  showPercentageSign?: boolean;
}

export default function PercentageCard({
  value,
  colorValue,
  showPercentageSign = false,
}: PercentageCardProps) {
  const { theme } = useTheme();
  const trackColor = theme === "dark" ? "#292727" : "";
  const isSmallScreen = useMediaQuery("(max-width: 426px)");

  return (
    <div>
      <CircularProgress
        sx={{
          "--CircularProgress-size": "90px",
          "--CircularProgress-trackThickness": "8px",
          "--CircularProgress-trackColor": trackColor,
          fontWeight: 600,
          fontSize: isSmallScreen ? "0.85rem" : "1rem",
        }}
        determinate
        value={value}
        color={colorValue}
        variant="soft"
      >
        {Math.round(value)}
        {showPercentageSign && "%"}
      </CircularProgress>
    </div>
  );
}
