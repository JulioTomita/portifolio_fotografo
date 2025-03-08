import { twMerge } from "tailwind-merge";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  color?: string;
  icon: React.ReactNode;
}

export default function IconButton({
  onClick,
  className,
  color,
  icon,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `${color ? color : "text-white"} p-2 hover:bg-gray-300${className}`
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
