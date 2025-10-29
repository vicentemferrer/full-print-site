import { useEffect, useState } from "react";

import type { Photo } from "@lib/definitions";
import ExternalServices from "@lib/ExternalServices";

async function getPhotos(url: string) {
  const dataSource = new ExternalServices();

  const data = await dataSource.getDataset(url);

  return data;
}

export function useCollage() {
  const [images, setImages] = useState<Photo[]>([]);

  useEffect(() => {
    (async () => {
      const photos = await getPhotos("/api/photos");

      setImages(photos);
    })();
  }, []);

  return { images };
}
