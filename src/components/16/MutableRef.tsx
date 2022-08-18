import { useState, useRef, useEffect } from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState<number>(0)
    const interValRef = useRef<number | undefined>(undefined)

    const stopTimer = () => {
        window.clearInterval(interValRef.current) // this line updates the interValRef.current to be undefined
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => { // returns an id that is of type number
            setTimer(timer => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}