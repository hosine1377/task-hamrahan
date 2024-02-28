'use client'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useContext } from 'react'
import { ProgressContext } from '@/app/context/Context'
import Image from 'next/image'

export default function Slider() {
  const dataContext = useContext(ProgressContext)
  const renderSlider = () => {
    if (dataContext.slides) {
      return (
        <div>
          <button
            className="arrow-btn position-absolute bottom-50 start-0"
            onClick={dataContext.backSlide}
          >
            <IoIosArrowBack />
          </button>
          <Image
            src={dataContext.slides[dataContext.index].src}
            className=""
            layout="responsive"
            width={350}
            height={350}
          />
          <button
            className="arrow-btn position-absolute bottom-50 end-0"
            onClick={dataContext.nextSlide}
          >
            <IoIosArrowForward />
          </button>
        </div>
      )
    }
  }
  return renderSlider()
}
