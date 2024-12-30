import { convertToJSON } from "./utils.mjs";

export default class ExternalServices {
  async getDataset(url) {
    const res = await fetch(url);
    const dataset = await convertToJSON(res);

    return dataset;
  }

  async getServices(url, serviceType) {
    const res = await fetch(url);
    const dataset = await convertToJSON(res);

    return dataset.filter((elem) => elem.category === serviceType);
  }
}
