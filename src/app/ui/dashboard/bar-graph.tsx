"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useMediaQuery } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function YearChart({
  monthlyRevenue,
}: {
  monthlyRevenue: { month: number; totalAmount: number }[];
}) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 426px)");
  const isMediumScreen = useMediaQuery("(max-width: 769px)");
  const isLargeScreen = useMediaQuery("(max-width: 1025px)");
  const isExtraLargeScreen = useMediaQuery("(max-width: 1441px)");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const props = {
    width: isSmallScreen
      ? 330
      : isMediumScreen
      ? 600
      : isLargeScreen
      ? 692
      : isExtraLargeScreen
      ? 1005
      : 1352,
    height: isSmallScreen
      ? 400
      : isMediumScreen
      ? 400
      : isLargeScreen
      ? 500
      : isExtraLargeScreen
      ? 500
      : 500,
    xAxis: [
      {
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        scaleType: "band" as const,
        tickPlacement: "middle" as const,
        tickLabelPlacement: "middle" as const,
      },
    ],
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };

  const chartData = Array(12)
    .fill(0)
    .map((_, monthIndex) => {
      const monthData = monthlyRevenue.find(
        (data) => data.month === monthIndex + 1
      );
      return monthData ? monthData.totalAmount : 0;
    });

  return (
    <BarChart
      sx={{
        // Styling class selector for table's label
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fill: isDark ? "#FAFAFA" : "#000000",
        },
        // Styling class selector for bottom axis line
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: isDark ? "#FAFAFA" : "#000000",
        },
        // Styling class selector for left axis line
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: isDark ? "#FAFAFA" : "#000000",
        },
        // Styling class selector for left axis ticks
        "& .MuiChartsAxis-left .MuiChartsAxis-tick": {
          stroke: isDark ? "#FAFAFA" : "#000000",
        },
        // Styling class selector for bottom axis ticks
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
          stroke: isDark ? "#FAFAFA" : "#000000",
        },
      }}
      series={[
        {
          data: chartData,
          label: "Revenue",
          color: "rgb(59, 130, 246)",
        },
      ]}
      grid={{ horizontal: true }}
      {...props}
    />
  );
}
