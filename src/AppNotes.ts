// types to note in this lecture:
import { u2Props } from "./components/18/eg2/U2"

// from lecture 6
export function from6() {
    type buttonProps = {
        clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void
    }
    type inputProps = {
        value: string
        changeHandler: (event: React.ChangeEvent<HTMLInputElement>, id?: number) => void
    }
}


// from lecture 7
export function from() {
    type containerProps = {
        style: React.CSSProperties
    }

    interface container2Props {
        caller?: 'stanley' | 'chukwu'
    }
    function Container2 ({caller, ...style}: container2Props & React.CSSProperties) {
        // return <div style={style}> ... </div>
    }
}


// from lecture 18
function from18() {
    type p2Props = {
        isLoggedIn: boolean
        component: React.ComponentType<u2Props>
        // component: means that the value will be a react component
        // <u2Props> means that the component will accept a prop type of <u2Props>, if we don't want to pass in props in some cases, we can do <{}>
    }
}

// --from lecture 22
function from22() {
    type ButtonProps = {
        variant: 'primary' | 'secondary',
    } & React.ComponentProps<'button'>

    type InputProps = React.ComponentProps<'input'>

    type ButtonProps2 = {
        variant: 'primary' | 'secondary',
        children: string
    } & Omit<React.ComponentProps<'button'>, 'children'>
    // <button className={`class-${variant}`} {...rest}> {children} </button>
}
