"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Select from "@/components/ui/select/Select";
import { Option } from "@/types/selectOptions";

type SelectProps = {
  options: Option[];
};

export default function GenreSelect({ options }: SelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentGenre = searchParams.get("genre") || "all";

  const handleGenreChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("genre");
      window.location.href = "/";
      return;
    } else if (value) {
      params.set("genre", value);
    }

    params.delete("page");

    const newUrl = params.toString() ? `?${params.toString()}` : "";

    router.push(newUrl);
  };

  const allOptions = [{ value: "all", label: "All" }, ...options];

  return (
    <div className="flex items-center gap-4 justify-end">
      <label
        htmlFor="genre-select"
        className="block text-lg font-bold text-text-primary"
      >
        Genre
      </label>
      <div className="flex items-center gap-2">
        <Select
          onChange={handleGenreChange}
          options={allOptions}
          value={currentGenre}
          id="genre-select"
          name="genre"
        />
      </div>
    </div>
  );
}
