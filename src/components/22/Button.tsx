// E.g 1
type ButtonProps = {
    variant: 'primary' | 'secondary',
} & React.ComponentProps<'button'>

export default function CustomButton({variant, children, ...rest}: ButtonProps) {
    return (
        <button className={`class-${variant}`} {...rest}>
            {children}
        </button>
    )
}


// E.g 2
type InputProps = React.ComponentProps<'input'>

export const CustomInput = (props: InputProps) => {
    return <input {...props} />
}

/**
the issue with the example above is that we can pass in <div> or <img /> as children for the custom button, we can tell typescript to accept only string. take a look at E.g 2
E.g 2
*/
type ButtonProps2 = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

