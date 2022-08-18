import { useRef, useEffect } from 'react'

export const DomRef = () => {
    /**
        So here we pass in the <HTMLInputElement> so that typescript knows that the future value of the ref is a HTML input element
        Null!, meaning the value cannot be null, something will be assigned immediately, otherwise we will have to do inputRef.current?.focus() 
    */
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}