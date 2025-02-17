import Gallery from "./gallery/Gallery.jsx";
import ExternalServices from "@scripts/ExternalServices.mjs";
import { qs } from "@scripts/utils.mjs";

async function fetchContent(setServices, filterList) {
  const dataSource = new ExternalServices();

  const { PUBLIC_SERVICES_URL } = import.meta.env;
  const { category } = qs("main").dataset;

  const data = await dataSource.getServices(PUBLIC_SERVICES_URL, category);

  setServices(await filterList(data));
}

const ServiceGallery = Gallery(fetchContent);

export default ServiceGallery;
