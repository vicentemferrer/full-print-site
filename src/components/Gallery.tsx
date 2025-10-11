import { useEffect, useState } from "react";

import { getParams, loadImage } from "@lib/utils.ts";
import type { Offering } from "@lib/definitions.ts";

import { useOfferings } from "@hooks/useOfferings";
import { useFilters } from "@hooks/useFilters";

import "./Gallery.css";

async function filterStables(list: Offering[]) {
  const promises = list.map(async (item) => {
    const path = item.img;

    try {
      await loadImage(path);
      return item;
    } catch (err) {
      return null;
    }
  });

  const stables = await Promise.allSettled(promises);

  return stables
    .filter((result) => result.status === "fulfilled" && result.value !== null)
    .map((promise: PromiseFulfilledResult<Offering>) => promise.value);
}

export default function Gallery() {
  const [stableItems, setStableItems] = useState<Offering[]>([] as Offering[]);

  const variant = getParams("v");
  const { items } = useOfferings(variant);
  const filteredItems = useFilters(variant, items);

  useEffect(() => {
    (async () => {
      const filtered = await filterStables(filteredItems);
      setStableItems(filtered);
    })();
  }, [filteredItems]);

  return (
    <ul className="gallery">
      {stableItems.length > 0 &&
        stableItems.map(({ name, img }, i) => (
          <li key={i}>
            <img src={img} alt={`${name} image`} loading="lazy" />
            <h4>{name}</h4>
          </li>
        ))}
      {/* {stableItems.length === 0 &&} */}
    </ul>
  );
}
