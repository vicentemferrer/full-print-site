import { atom, map } from "nanostores";

import type { Filters, Offering, ServiceCategory } from "@lib/definitions";

export const $items = atom<Offering[]>([]);

export const $filters = map<Filters>({ category: "all" });

export function setCategory(value: ServiceCategory) {
  $filters.setKey("category", value);
}
