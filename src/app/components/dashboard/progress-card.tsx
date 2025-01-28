"use client";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";
import CircularProgress from "@mui/joy/CircularProgress";

interface ProgressCardProps {
  value: number;
  colorValue: "primary" | "neutral" | "danger" | "success" | "warning";
}

export default function ProgressCard({ value, colorValue }: ProgressCardProps) {
  const isSmallScreen = useMediaQuery("(max-width: 426px)");
  const isMediumScreen = useMediaQuery("(max-width: 769px)");
  const isLargeScreen = useMediaQuery("(max-width: 1025px)");

  const { theme } = useTheme();
  const trackColor = theme === "dark" ? "#292727" : "";

  return (
    <div>
      <CircularProgress
        sx={{
          "--CircularProgress-size": isSmallScreen
            ? "70px"
            : isMediumScreen
            ? "80px"
            : isLargeScreen
            ? "80px"
            : "100px",
          "--CircularProgress-trackThickness": isSmallScreen
            ? "6px"
            : isMediumScreen
            ? "8px"
            : isLargeScreen
            ? "10px"
            : "12px",
          "--CircularProgress-trackColor": trackColor,
        }}
        determinate
        value={value}
        color={colorValue}
        variant="soft"
      >
        {Math.round(value)}
      </CircularProgress>
    </div>
  );
}
