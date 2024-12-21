import type { ServiceLink } from '@devTypes/ServiceLink.ts';

import './ServiceCard.css';

function ServiceCard({ props }: { props: ServiceLink }) {
  const { icon, title, url } = props;

  return (
    <a href={`/${url}`}>
      <article className='service-card'>
        <i className={`fi fi-br-${icon}`}></i>
        <h3>{title}</h3>
      </article>
    </a>
  );
}

export default ServiceCard;
