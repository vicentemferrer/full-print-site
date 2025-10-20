import type { ChangeEvent, FormEvent } from "react";
import { useStore } from "@nanostores/react";

import type { ServiceCategory } from "@lib/definitions";
import { categoryOptions } from "@lib/data";
import { getParams } from "@lib/utils";

import { useFilterSync } from "@hooks/useFilterSync";

import { $filters, setCategory, setQuery } from "@store/OfferingStore";

import "./Filters.css";

export default function Filters() {
  const variant = getParams("v");

  useFilterSync(variant);
  const filters = useStore($filters);

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
        <input
          type="text"
          name="search"
          placeholder="Buscar"
          onChange={handleSearchChange}
        />
        <i className="fi fi-br-search"></i>
      </label>
    </form>
  );
}
