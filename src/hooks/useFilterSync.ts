import { useEffect } from "react";
import { useStore } from "@nanostores/react";

import { getParams } from "@lib/utils";
import type { ServiceCategory } from "@lib/definitions";

import { $filters, setCategory } from "@store/OfferingStore.ts";

export function useFilterSync() {
  const filters = useStore($filters);

  useEffect(() => {
    const categoryFromUrl = getParams("sc");

    if (categoryFromUrl) {
      setCategory(categoryFromUrl as ServiceCategory);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (filters.category !== "all") {
      params.set("sc", filters.category);
    } else {
      params.delete("sc");
    }

    const newUrl = `${window.location.pathname}${params.toString() ? "?" + params.toString() : ""}`;
    window.history.replaceState({}, "", newUrl);
  }, [filters.category]);
}
