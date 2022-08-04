import { useState } from 'react'
import cn from 'classnames'

import img1 from '../../assets/1-removebg-preview.png'
import coin from '../../assets/fINAL_COIN-removebg.png'

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false)

  function handleClick() {
    if (card.variant === 'click') {
      setShowBack(!showBack)
    }
  }

  return (
    <div className="flip-card-outer" onClick={handleClick}>
      <div
        className={cn('flip-card-inner', {
          showBack,
          'hover-trigger': card.variant === 'hover',
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.front}</p>
          </div>
          <div className="card-body d-flex justify-content-center align-items-top">
            <img src={img1} width="300" height="150">
              {card.image}
            </img>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
