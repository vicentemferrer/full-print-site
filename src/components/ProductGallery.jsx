import Gallery from "./Gallery.jsx";
import ExternalServices from "@scripts/ExternalServices.mjs";

async function fetchContent(setProducts, filterList) {
  const dataSource = new ExternalServices();

  const { PUBLIC_PRODUCTS_URL } = import.meta.env;

  const data = await dataSource.getProducts(PUBLIC_PRODUCTS_URL);

  setProducts(await filterList(data));
}

const ProductGallery = Gallery(fetchContent);

export default ProductGallery;
