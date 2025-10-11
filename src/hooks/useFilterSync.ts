import { useEffect } from "react";
import { useStore } from "@nanostores/react";

import { getParams } from "@lib/utils";
import type { ServiceCategory } from "@lib/definitions";

import { $filters, setCategory, setQuery } from "@store/OfferingStore.ts";

export function useFilterSync() {
  const filters = useStore($filters);

  useEffect(() => {
    const categoryFromUrl = getParams("sc");
    const queryFromUrl = getParams("q");

    if (categoryFromUrl) {
      setCategory(categoryFromUrl as ServiceCategory);
    }

    if (queryFromUrl) {
      setQuery(queryFromUrl);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (filters.category !== "all") {
      params.set("sc", filters.category);
    } else {
      params.delete("sc");
    }

    if (filters.query !== "") {
      params.set("q", filters.query);
    } else {
      params.delete("q");
    }

    const newUrl = `${window.location.pathname}${params.toString() ? "?" + params.toString() : ""}`;
    window.history.replaceState({}, "", newUrl);
  }, [filters]);
}
