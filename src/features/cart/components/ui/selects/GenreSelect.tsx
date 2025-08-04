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

    // Reset to page 1 when changing genre
    params.delete("page");

    const newUrl = params.toString() ? `?${params.toString()}` : "";

    router.replace(newUrl);
  };

  const allOptions = [{ value: "all", label: "All" }, ...options];

  return (
    <Select
      onChange={handleGenreChange}
      options={allOptions}
      value={currentGenre}
      placeholder="Select a genre"
      id="genre-select"
      name="genre"
    />
  );
}
