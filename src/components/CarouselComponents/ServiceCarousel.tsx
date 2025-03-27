import type { Link } from "@lib/definitions.ts";

import Carousel from "./carousel/Carousel.tsx";
import ServiceCard from "./ServiceCard.tsx";

import "./ServiceCarousel.css";

type Props = {
  anchors: Link[];
};

function ServiceSlider({ anchors }: Props) {
  const servicesCards = anchors.map((anchor: Link, i) => (
    <ServiceCard key={i} props={anchor} />
  ));

  return <Carousel>{servicesCards}</Carousel>;
}

export default ServiceSlider;
