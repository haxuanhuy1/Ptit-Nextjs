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
    src: "https://mercedeshanoi.com.vn/wp-content/uploads/mercedes-c300-amg-2023-mercedeshanoi-com-vn-banner.jpg",
   
    key: 1,
  },
  {
    src: "https://mercedeshanoi.com.vn/wp-content/uploads/gia-xe-mercedes-c300-amg-2022-lap-rap-mercedeshanoi-com-vn_1-600x450.jpg",
    
    key: 2,
  },
  {
    src: "https://mercedeshanoi.com.vn/wp-content/uploads/gia-xe-mercedes-c300-amg-2022-lap-rap-mercedeshanoi-com-vn_3-768x576.jpg",
   
    key: 3,
  },
  {
    src : "https://mercedeshanoi.com.vn/wp-content/uploads/mercedes-benz-c200-plus-2022-mercedeshanoi-com-vn_10-768x512.jpg",
    
    key: 4,
  },
  {
    src : "https://mercedeshanoi.com.vn/wp-content/uploads/gia-xe-mercedes-c300-amg-2022-lap-rap-mercedeshanoi-com-vn_4-600x450.jpg",
   
    key: 5,
  },
];

function Example3(args) {
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

export default Example3;