import Gallery from "./gallery/Gallery.tsx";

import ExternalServices from "@lib/ExternalServices.ts";

async function fetchContent(setProducts, filterList) {
  const dataSource = new ExternalServices();

  const { PUBLIC_PRODUCTS_URL } = import.meta.env;

  const data = await dataSource.getProducts(PUBLIC_PRODUCTS_URL);

  setProducts(await filterList(data));
}

const ProductGallery = Gallery(fetchContent);

export default ProductGallery;
