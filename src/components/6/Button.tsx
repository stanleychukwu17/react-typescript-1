type buttonProps = {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void
}

export default function Button({clickHandler}: buttonProps) {

    return (
    <div>
        <button onClick={(event)=> clickHandler(event, 22)}>Click me</button>
    </div>
    )
}