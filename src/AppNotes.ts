// types to note in this lecture:

// from lecture 6
    export type buttonProps = {
        clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void
    }
    export type inputProps = {
        value: string
        changeHandler: (event: React.ChangeEvent<HTMLInputElement>, id?: number) => void
    }

// from lecture 7



// from lecture 18
    export type p2Props = {
        isLoggedIn: boolean
        component: React.ComponentType<u2Props> // means that this component will accept a prop type of <u2Props>, if we don't want to pass in props in some cases, we can do <u2Props | {}>
    }

// --from lecture 22
    export type ButtonProps = {
        variant: 'primary' | 'secondary',
    } & React.ComponentProps<'button'>

    export type InputProps = React.ComponentProps<'input'>

    export type ButtonProps2 = {
        variant: 'primary' | 'secondary',
        children: string
    } & Omit<React.ComponentProps<'button'>, 'children'>
    // <button className={`class-${variant}`} {...rest}> {children} </button>
