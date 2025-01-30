import { useEffect, useState } from "react";
import "./ServiceGallery.css";

import ExternalServices from "@scripts/ExternalServices.mjs";
import { qs, numberFormat, loadImage } from "@scripts/utils.mjs";

async function filterServiceGallery(list) {
  const servicePromises = list.map(async (service) => {
    const path = service.imgPath;

    try {
      await loadImage(path);
      return service;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  });

  const serviceGallery = await Promise.allSettled(servicePromises);

  return serviceGallery
    .filter(({ status, value }) => status === "fulfilled" && value !== null)
    .map((service) => service.value);
}

function ServiceGallery() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      const dataSource = new ExternalServices();

      const { PUBLIC_SERVICES_URL } = import.meta.env;
      const { category } = qs("main").dataset;

      const data = await dataSource.getServices(PUBLIC_SERVICES_URL, category);

      setServices(await filterServiceGallery(data));
    }

    fetchContent();
  });

  return (
    <ul className="gallery">
      {services.map(({ name, price, imgPath }, i) => (
        <li key={i}>
          <img src={imgPath} alt={`${name} example image`} loading="lazy" />
          <p>{name}</p>
          <p>{numberFormat(price)}</p>
        </li>
      ))}
    </ul>
  );
}

export default ServiceGallery;
