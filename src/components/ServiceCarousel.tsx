import type { ServiceLink } from "../data/types.ts";

import Carousel from "@components/carousel/Carousel.tsx";
import ServiceCard from "@components/ServiceCard.tsx";

import "./ServiceCarousel.css"

type Props = {
    anchors: ServiceLink[]
}

function ServiceSlider({ anchors }: Props) {
    const servicesCards = anchors.map((anchor: ServiceLink, i) => (
        <ServiceCard key={i} props={anchor} />
    ))

    return (
        <Carousel>
            {
                servicesCards
            }
        </Carousel>
    )
}

export default ServiceSlider