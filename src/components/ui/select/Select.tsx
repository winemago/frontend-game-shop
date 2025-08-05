import { Option } from "@/types/selectOptions";
import Separator from "../separators/Separator";

type SelectProps = {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  label?: string;
};

export default function Select({
  options,
  value,
  onChange,
  className = "",
  disabled = false,
  id,
  name,
  label,
}: SelectProps) {
  const baseClasses =
    "px-0 py-3 rounded-common bg-white text-gray-700 transition-all duration-200";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:border-stroke focus:border-transparent";

  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor="genre-select"
        className="block text-lg font-bold text-text-primary"
      >
        {label}
      </label>
      <Separator />
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
    </div>
  );
}
