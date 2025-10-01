import Gallery from "./gallery/Gallery.tsx";

import type { ServiceCategory } from "@lib/definitions.ts";
import ExternalServices from "@lib/ExternalServices.ts";
import { qs } from "@lib/utils.ts";

async function fetchContent(setServices, filterList) {
  const dataSource = new ExternalServices();

  const { PUBLIC_SERVICES_URL } = import.meta.env;
  const { category } = qs("main").dataset;

  const data = await dataSource.getServices(
    PUBLIC_SERVICES_URL,
    category as ServiceCategory,
  );

  setServices(await filterList(data));
}

const ServiceGallery = Gallery(fetchContent);

export default ServiceGallery;
