import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  color?: string;
  borderColor?: string;
}

export default function Button({
  text,
  onClick,
  className,
  color,
  borderColor,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `${
          color ? color : "text-white"
        } rounded-3xl p-2 border hover:bg-gray-300 ${
          borderColor ? borderColor : "border-white"
        } ${className}`
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
