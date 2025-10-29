import { convertToJSON } from "./utils.ts";

export default class ExternalServices {
  async getDataset(url: string) {
    const res = await fetch(url);
    const dataset = await convertToJSON(res);

    return dataset;
  }
}
