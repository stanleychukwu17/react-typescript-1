import { useState } from "react"
import Login from "./Login"
import Profile from './Profile';

type privateProps = {
    isLoggedIn: boolean
    // component: React.ComponentType
}

export default function Private({isLoggedIn}: privateProps) {
    let [allowed, setAllowed] = useState<boolean>(isLoggedIn)

    const eventHandler = (wch: boolean): any => {
        console.log(wch)
        setAllowed(wch)
    }

    if (isLoggedIn || allowed) {
        return <Profile clickHandler={() => eventHandler(false)} />
    } else {
        return <Login clickHandler={() => eventHandler(true)} />
    }
}