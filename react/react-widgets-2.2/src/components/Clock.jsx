import {useState, useEffect, useRef} from 'react'

export default function Clock() {

  const clockTime = useRef(null)
  const [isMounted, setIsMounted] = useState(true)

  function handleMount() {
    setIsMounted(true)
  }

  function handleUnmount() {
    setIsMounted(false)
  }

  const [time, setTime] = useState("")

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [isMounted])

  useEffect(() => {
    if (isMounted) {
      clockTime.current.innerText = time
    }
  }, [time])  

  function updateTime() {
    const currentDate = new Date()
    const timeStamp = currentDate.getTime()
    if (timeStamp) {
      const formattedTime = new Date(timeStamp).toLocaleString().split(" ")
      setTime(`${formattedTime[1]} ${formattedTime[2]}`)
    }
  } 

  return(
    <div className="clock-container">
      <h1>Clock Widget</h1>
      {isMounted ? <h2 ref={clockTime}></h2> : null}
      <div className="button-container">
        <button onClick={handleMount}>Mount</button>
        <button onClick={handleUnmount}>Unmount</button>
      </div>
    </div>
  )
}