import CircularProgress from "@mui/joy/CircularProgress";

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
  return (
    <div>
      <CircularProgress
        sx={{
          "--CircularProgress-size": "90px",
          "--CircularProgress-trackThickness": "8px",
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
