import type { ServiceLink } from "@devTypes/ServiceLink.ts";

import Carousel from "./carousel/Carousel.tsx";
import ServiceCard from "./ServiceCard.tsx";

import "./ServiceCarousel.css";

type Props = {
  anchors: ServiceLink[];
};

function ServiceSlider({ anchors }: Props) {
  const servicesCards = anchors.map((anchor: ServiceLink, i) => (
    <ServiceCard key={i} props={anchor} />
  ));

  return <Carousel>{servicesCards}</Carousel>;
}

export default ServiceSlider;
