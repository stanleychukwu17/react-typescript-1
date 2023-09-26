/* eslint-disable @typescript-eslint/no-unused-vars */
// E.g 1
type ButtonProps = {
    variant: 'primary' | 'secondary',
} & React.ComponentProps<'button'>
// the above type means that the ButtonProps can receive values of variant and every attribute a button can receive e.g (onClick, onFocus)

export default function CustomButton({variant, children, ...rest}: ButtonProps) {
    return (
        <button className={`class-${variant}`} {...rest}>
            {children}
        </button>
    )
}


// E.g 2, the below means the inputProps will receive everything that input element can receive
type InputProps = React.ComponentProps<'input'>

export const CustomInput = (props: InputProps) => {
    return <input {...props} />
}

/**
E.g 2
the issue with the example above is that we can pass in <div> or <img /> as children for the custom button, we can tell typescript to accept only string as the children. take a look at E.g 2
*/
type ButtonProps2 = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

