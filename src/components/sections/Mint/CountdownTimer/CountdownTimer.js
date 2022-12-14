import { useState, useEffect } from 'react'
import './CountdownTimer.css'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <div className="countdown-timer titleFont">
      <p className="animate-charcter Baloo2">{remainingTime.days}</p>
      <span />
      <span />
      <span />
      <p className="animate-charcter Baloo2">{remainingTime.hours}</p>
      <span />
      <span />
      <span />
      <p className="animate-charcter Baloo2">{remainingTime.minutes}</p>
      <span />
      <span />
      <span />
      <p className="animate-charcter Baloo2">{remainingTime.seconds}</p>
    </div>
  )
}

export default CountdownTimer
