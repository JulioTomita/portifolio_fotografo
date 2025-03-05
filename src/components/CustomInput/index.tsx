interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CustomInput({
  label,
  value,
  onChange,
  placeholder,
}: CustomInputProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-black items-start flex">{label}</div>
      <input
        className="w-1/4 h-10 px-2 items-center justify-center text-black bg-gray-200 border border-black rounded-md flex"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
