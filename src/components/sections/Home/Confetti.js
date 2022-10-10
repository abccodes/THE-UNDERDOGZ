import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiComponent = () => {
  const { width, height } = useWindowSize()
  return (
    <div>
      <Confetti
        numberOfPieces={200}
        gravity={0.01}
        width={width}
        height={height * 3}
        drawShape={(ctx) => {
          ctx.beginPath()
          for (let i = 0; i < 22; i++) {
            const x = 1
            const y = 1
            ctx.lineTo(x, y)
          }
          ctx.stroke()
          ctx.closePath()
        }}
        color={'#e91e63'}
      />
    </div>
  )
}

export default ConfettiComponent
