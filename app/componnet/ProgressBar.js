import React from 'react'
import { ProgressContext } from '@/app/context/Context'
import { useContext } from 'react'

function ProgressBar() {
  const dataContext = useContext(ProgressContext)

  const interval = 100 / Object.keys(dataContext.slides).length

  const progress = ((dataContext.index + 1) * interval).toFixed(2)
  const steps = dataContext.slides.map((steps) => {
    return (
      <div key={steps.id} className="barmarker text-white">
        {steps.size}
      </div>
    )
  })
  return (
    <section className="progress-container my-2">
      <div className="barmarker-container">
        <div className="barmarker text-white">0</div>
        {steps}
      </div>
      <progress className="progress" max="100" value={progress}></progress>
    </section>
  )
}

export default ProgressBar
