import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

import ExternalServices from "@lib/ExternalServices";
import type { Offering, Service } from "@lib/definitions";

import { useFilters } from "./useFilters";

import { $items } from "@store/OfferingStore";

async function getOfferings(url: string) {
  const dataSource = new ExternalServices();

  const data = await dataSource.getDataset(url);

  $items.set(data);
}

export function useOfferings(variant: string) {
  const items = useStore($items);

  const { PUBLIC_SERVICES_URL, PUBLIC_PRODUCTS_URL } = import.meta.env;

  useEffect(() => {
    getOfferings(
      variant === "s"
        ? PUBLIC_SERVICES_URL
        : variant === "p"
          ? PUBLIC_PRODUCTS_URL
          : null,
    );
  }, []);

  return { items };
}
