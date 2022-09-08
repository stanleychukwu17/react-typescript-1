type ButtonProps = {
    variant: 'primary' | 'secondary',
} & React.ComponentProps<'button'>

type InputProps = React.ComponentProps<'input'>

export default function CustomButton({variant, children, ...rest}: ButtonProps) {
    return (
        <button className={`class-${variant}`} {...rest}>
            {children}
        </button>
    )
}

export const CustomInput = (props: InputProps) => {
    return <input {...props} />
}