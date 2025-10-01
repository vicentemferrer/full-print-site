import type { Service, ServiceCategory } from "@lib/definitions.ts";
import { convertToJSON } from "./utils.ts";

export default class ExternalServices {
  async getDataset(url: string) {
    const res = await fetch(url);
    const dataset = await convertToJSON(res);

    return dataset;
  }

  async getServices(url: string, serviceType: ServiceCategory) {
    const res = await fetch(url);
    const dataset = await convertToJSON(res);

    return dataset.filter((elem: Service) =>
      elem.category.includes(serviceType),
    );
  }

  async getProducts(url: string) {
    const res = await fetch(url);
    const dataset = await convertToJSON(res);

    return dataset;
  }
}
