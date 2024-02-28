import React from 'react'
import { ProgressContext } from '@/app/context/Context'
import { useContext } from 'react'

function Pagination() {
  const dataContext = useContext(ProgressContext)
  const handelClick = (i) => {
    dataContext.setIndex(i)
  }
  return (
    <div className="pagination-container w-100 d-flex justify-content-center my-3">
      <div className="paginations w-50 d-flex justify-content-center">
        {dataContext.slides.map((pagination, index) => {
          return (
            <span
              className={`${
                dataContext.index === index ? 'active-pagination' : ''
              } circl`}
              key={pagination.id}
              onClick={() => handelClick(index)}
            ></span>
          )
        })}
      </div>
    </div>
  )
}

export default Pagination
