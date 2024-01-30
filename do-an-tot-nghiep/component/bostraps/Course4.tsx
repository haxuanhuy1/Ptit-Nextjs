import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: "https://mercedeshanoi.com.vn/wp-content/uploads/E200-Exclusive-2022-600x450.jpg",
   
    key: 1,
  },
  {
    src: "https://mercedeshanoi.com.vn/wp-content/uploads/Mercedes-benz-e200-exclusive-2021-mercedeshanoi-com-vn_17-600x356.jpg",
    
    key: 2,
  },
  {
    src: "https://mercedeshanoi.com.vn/wp-content/uploads/Mercedes-benz-e200-exclusive-2021-mercedeshanoi-com-vn_5-600x337.jpg",
   
    key: 3,
  },
  {
    src : "https://mercedeshanoi.com.vn/wp-content/uploads/Mercedes-benz-e200-exclusive-2021-mercedeshanoi-com-vn_14-768x430.jpg",
    
    key: 4,
  },
  {
    src : "https://mercedeshanoi.com.vn/wp-content/uploads/Mercedes-benz-e200-exclusive-2021-mercedeshanoi-com-vn_16-600x633.jpg",
   
    key: 5,
  },
];

function Example4(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
     
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example4;