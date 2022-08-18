import { useState } from "react"
import Login from "./Login"
import Profile from './Profile';

type privateProps = {
    // isLoggedIn: boolean
    isLoggedIn: true | false
    // component: React.ComponentType
}

export default function Private({isLoggedIn}: privateProps) {
    let [allowed, setAllowed] = useState<boolean>(isLoggedIn)

    const eventHandler = (wch: boolean): boolean => {
        setAllowed(wch)
        return true
    }

    if (isLoggedIn || allowed) {
        return <Profile clickHandler={() => eventHandler(false)} />
    } else {
        return <Login clickHandler={() => eventHandler(true)} />
    }
}