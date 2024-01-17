import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './multiCarousel.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 4
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
}
// interface MyCarouselProps {
//   items: {name: string; imageName: string}[]
// }

export const MultiCarousel= ({items}) => {
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, index) => (
          <div key={index} className="carImage">
            <img src={item.imageName} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </>
  )
}
