import { useEffect, useState } from "react";
import "./Gallery.css";

import { loadImage } from "@lib/utils.ts";
import type { Offering } from "@lib/definitions.ts";

async function filterGallery(list: Offering[]) {
  const galleryPromises = list.map(async (item) => {
    const path = item.img;

    try {
      await loadImage(path);
      return item;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  });

  const gallery = await Promise.allSettled(galleryPromises);

  return gallery
    .filter((result) => result.status === "fulfilled" && result.value !== null)
    .map((promise: PromiseFulfilledResult<Offering>) => promise.value);
}

const Gallery = (fetchContent) => () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchContent(setItems, filterGallery);
  }, []);

  return (
    <ul className="gallery">
      {items.map(({ name, img }, i) => (
        <li key={i}>
          <img src={img} alt={`${name} image`} loading="lazy" />
          <h4>{name}</h4>
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
