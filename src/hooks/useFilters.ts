import { useMemo } from "react";
import { useStore } from "@nanostores/react";

import type { Offering, Service } from "@lib/definitions";

import { $filters } from "@store/OfferingStore.ts";

export function useFilters(variant: string, data: Offering[]) {
  const filters = useStore($filters);

  const filteredData = useMemo(() => {
    return data.filter((item: Offering & Service) => {
      let matchesCategory = filters.category === "all";

      const matchesSearch =
        filters.query === "" ||
        item.name.toLowerCase().includes(filters.query.toLowerCase());

      if (variant === "s") {
        matchesCategory =
          filters.category === "all" ||
          item.category.includes(filters.category);
      }

      return matchesSearch && matchesCategory;
    });
  }, [data, filters]);

  return filteredData;
}
