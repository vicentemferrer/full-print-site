import { useRef } from 'react';

import CarouselButton, {
  btnTypes,
} from '@components/carousel/CarouselButton.tsx';
import './Carousel.css';

function Carousel({ children }) {
  const trackRef = useRef(null);

  function handleClick(isPrev: boolean) {
    const track = trackRef.current;
    const card = track.querySelector('.service-card');

    const currentScrollPosition = track.scrollLeft;
    const cardWidth = card.offsetWidth;

    track.scroll(
      isPrev
        ? currentScrollPosition - cardWidth
        : currentScrollPosition + cardWidth,
      0,
    );
  }

  return (
    <section className='carousel'>
      <CarouselButton btnType={btnTypes.Prev} handleClick={handleClick} />

      <div className='carousel-track' ref={trackRef}>
        {children}
      </div>

      <CarouselButton btnType={btnTypes.Next} handleClick={handleClick} />
    </section>
  );
}

export default Carousel;
