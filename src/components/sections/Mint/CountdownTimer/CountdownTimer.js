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

  function getDays() {
    return remainingTime.days
  }

  return (
    <div className="countdown-timer monoton">
      <p className="two-numbers">{remainingTime.days}</p>
      <span></span>:<span></span>
      <p className="two-numbers">{remainingTime.hours}</p>
      <span></span>:<span></span>
      <p className="two-numbers">{remainingTime.minutes}</p>
      <span></span>:<span></span>
      <p className="two-numbers">{remainingTime.seconds}</p>
    </div>
  )
}

export default CountdownTimer
