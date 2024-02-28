'use client'

import './page.module.css'
import Slider from './componnet/Slider/Slider'
import ProgressBar from './componnet/ProgressBar'
import { ProgressContext } from './context/Context'
import { useState } from 'react'
import Pagination from './componnet/Pagination'
// import { useState } from 'react'
export default function Home() {
  const imageSlider = [
    {
      id: 1,
      src: '/image/women-1.png',
      size: 14,
    },
    {
      id: 2,
      src: '/image/women-2.png',
      size: 18,
    },
    {
      id: 3,
      src: '/image/women-3.png',
      size: 21,
    },
    {
      id: 4,
      src: '/image/women-4.png',
      size: 26,
    },
    {
      id: 5,
      src: '/image/women-5.png',
      size: 37,
    },
    {
      id: 6,
      src: '/image/women-6.png',
      size: 44,
    },
  ]
  const [slides, setSlides] = useState(imageSlider)
  const [index, setIndex] = useState(0)
  const [checked, setChecked] = useState(false)

  const nextSlide = () => {
    if (index !== slides.length - 1) {
      setIndex(index + 1)
    }
  }
  const backSlide = () => {
    if (index !== 0) {
      setIndex(index - 1)
    }
  }

  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <ProgressContext.Provider
      value={{ slides, index, nextSlide, backSlide, setIndex }}
    >
      <header>
        <div className="container text-white">HEADER</div>
      </header>

      <main className="p-0 m-0 mt-4">
        <div className="container-fluid">
          <div className="text-title text-end ">
            <p className="text-fa  text-white position-relative mx-3">
              درصد چربی بدن
            </p>
            <p className="text-en text-white mx-3">Body fat percentage</p>
          </div>
          <p className="text-white text-end px-2">
            نزدیک ترین تصویر به بدن خود را انتخاب کنید
          </p>
          <div className="row d-flex justify-content-center py-2">
            <div className="col-md-5 col-sm-8">
              <div class="card justify-content-center align-items-center position-relative">
                <Slider />

                <div class="card-body w-100 d-flex justify-content-center align-items-cente flex-column">
                  <div className="d-flex justify-content-center align-items-cente">
                    <input
                      className="checkbox d-flex justify-content-center align-items-cente"
                      type="checkbox"
                      checked={checked}
                      onChange={handleChange}
                    />
                  </div>
                  <ProgressBar />
                  <Pagination />

                  <a
                    href="#"
                    class={`${
                      checked ? 'btn-success' : 'btn-outline-success'
                    } btn   w-100`}
                  >
                    تایید و ادامه
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProgressContext.Provider>
  )
}
