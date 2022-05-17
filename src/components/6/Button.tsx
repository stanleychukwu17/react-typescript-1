type buttonProps = {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void
}

export default function Button(props: buttonProps) {

    return (
    <div>
        <button onClick={(event)=> props.clickHandler(event, 22)}>Click me</button>
    </div>
    )
}