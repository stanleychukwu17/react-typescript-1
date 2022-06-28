import L2 from "./L2"
import { u2Props } from "./U2"


type p2Props = {
    isLoggedIn: boolean
    component: React.ComponentType<u2Props> // means that this component will accept a prop type of <u2Props>, if we don't want to pass in props in some cases, we can do <u2Props | {}>
}

export default function P2({isLoggedIn, component: Component}: p2Props) {
    if (isLoggedIn) {
        return <Component name="stanley" age={29} />
    } else {
        return <L2  />
    }
}