import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import styles from './Index.module.scss'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
  //   CarouselCaption
} from 'reactstrap'

const items = [
  {
    src: 'https://i.ytimg.com/vi/hlCOYkD37ic/maxresdefault.jpg',
    altText: 'Tamales'
  },
  {
    src: 'http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/02/tamales.jpg',
    altText: 'Tamales'
  },
  {
    src: 'https://i.ytimg.com/vi/eTQdHOx670c/sddefault.jpg#404_is_fine',
    altText: 'Tamales'
  }
]

const Index = ({ cartItems }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    )
  })

  return (
    <div style={{ display: 'block', width: 'auto', height: '10px', padding: 30 }}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Anterior'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Siguiente'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default Index
