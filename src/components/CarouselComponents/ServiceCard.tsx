import type { Link } from "@lib/definitions.ts";

import "./ServiceCard.css";

function ServiceCard({ props }: { props: Link }) {
  const { icon, title, url } = props;

  return (
    <a href="#">
      <article className="service-card">
        <i className={`fi fi-br-${icon}`}></i>
        <h3>{title}</h3>
      </article>
    </a>
  );
}

export default ServiceCard;
