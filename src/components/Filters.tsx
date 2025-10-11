import type { ChangeEvent, FormEvent } from "react";
import { useStore } from "@nanostores/react";

import type { ServiceCategory } from "@lib/definitions";
import { categoryOptions } from "@lib/data";
import { getParams } from "@lib/utils";

import { useFilterSync } from "@hooks/useFilterSync";

import { $filters, setCategory, setQuery } from "@store/OfferingStore";

export default function Filters() {
  useFilterSync();
  const filters = useStore($filters);

  const variant = getParams("v");

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value as ServiceCategory);
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
    >
      <label>
        Categoría
        <select onChange={handleCategoryChange} disabled={variant === "p"}>
          {categoryOptions.map(({ name, id }) => (
            <option value={id} selected={filters.category === id}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input type="text" name="search" onChange={handleSearchChange} />
      </label>
    </form>
  );
}
