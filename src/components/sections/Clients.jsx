import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import Container from '../utils/Container';
import { useState } from 'react';

// Partners Images
import partner01 from '../../assets/partner01.svg'
import partner02 from '../../assets/partner02.svg'
import partner03 from '../../assets/partner03.svg'
import partner04 from '../../assets/partner04.svg'
import partner05 from '../../assets/partner05.svg'
import partner06 from '../../assets/partner06.svg'

const Clients = () => {
  const [width, setWidth] = useState(+window.innerWidth)
  
  window.addEventListener("resize", () => {
    setWidth(+window.innerWidth)
  })

  return (
    <section>
      <Container>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={
            width >= 0 && width < 640
            ? 2
            : width >= 640 && width < 768
            ? 3
            : width >= 768
            ? 4
            : 4
          }
          autoplay
          pagination={{ clickable: true }}
          className="cursor-grab"
        >
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner01} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner02} alt="Partner" className='mx-auto' />
          </SwiperSlide >
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner03} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner04} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner05} alt="Partner" className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide className='!my-auto !pb-12'>
            <img src={partner06} alt="Partner" className='mx-auto' />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}

export default Clients