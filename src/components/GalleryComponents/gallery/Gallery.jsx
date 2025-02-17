import { useEffect, useState } from "react";
import "./Gallery.css";

import { numberFormat, loadImage } from "@scripts/utils.mjs";

async function filterGallery(list) {
  const galleryPromises = list.map(async (item) => {
    const path = item.imgPath;

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
    .filter(({ status, value }) => status === "fulfilled" && value !== null)
    .map((promise) => promise.value);
}

const Gallery = (fetchContent) => () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchContent(setItems, filterGallery);
  }, []);

  return (
    <ul className="gallery">
      {items.map(({ name, price, imgPath }, i) => (
        <li key={i}>
          <img src={imgPath} alt={`${name} example image`} loading="lazy" />
          <h4>{name}</h4>
          <p>{numberFormat(price)}</p>
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
