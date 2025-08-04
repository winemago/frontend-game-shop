import { Option } from "@/types/selectOptions";

type SelectProps = {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
};

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
  id,
  name,
}: SelectProps) {
  const baseClasses =
    "px-4 py-3 rounded-common border border-stroke-secondary bg-white text-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:border-stroke focus:border-transparent";

  return (
    <select
      id={id}
      name={name}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
